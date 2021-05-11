import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Modal from 'flarum/common/components/Modal';
import Stream from 'flarum/common/utils/Stream';

import copy from 'copy-text-to-clipboard';
import load from 'external-load';

let loaded = false;
const addQRCode = async () => {
    if (loaded) {
        return;
    }

    await load.js('https://cdn.jsdelivr.net/npm/qrcode@1.4.4/build/qrcode.min.js');

    loaded = true;
};

const trans = (key, options = {}) => {
    return app.translator.trans(`nearata-twofactor.forum.${key}`, options);
};

const download = codes => {
    const text = trans('setup_modal.backups.download_file_format', {
        website_title: app.forum.attribute('title'),
        website_url: app.forum.attribute('baseUrl'),
        codes: codes.join('\n'),
        date: window.dayjs().format('ll')
    });
    const mimeType = 'text/plain';
    const blob = new Blob(text, { type: mimeType });

    const anchor = document.createElement('a');
    anchor.download = 'twofactor_recovery_codes.txt';
    anchor.href = URL.createObjectURL(blob);
    anchor.dataset.downloadurl = [mimeType, anchor.download, anchor.href].join(':');
    anchor.style.display = "none";
    document.body.appendChild(anchor);

    anchor.click();
    document.body.removeChild(anchor);
    setTimeout(() => URL.revokeObjectURL(anchor.href), 1500);
}

export default class TwoFactorSetupModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);

        this.state = this.attrs.twoFactorState;
        this.state.refresh();

        this.success = false;
        this.enabled = false;
        this.manually = false;

        this.password = Stream('');
        this.code = Stream('');

        this.canGenerateBackups = app.forum.attribute('canGenerateBackups');
    }

    className() {
        return 'TwoFactorSetupModal Modal--small';
    }

    title() {
        return trans('setup_modal.title');
    }

    content() {
        if (this.success) {
            return [
                m('.Modal-body', [
                    m('.Form.Form--centered', [
                        m('p.helpText', [
                            this.enabled
                                ? trans('setup_modal.enabled')
                                : trans('setup_modal.disabled')
                        ]),
                        this.canGenerateBackups && this.enabled ? [
                            m('p.message', trans('setup_modal.backups.modal_message')),
                            this.state.loading ? m(LoadingIndicator) : [
                                m('ol.Backups-list', this.state.backups.map(code => {
                                    return m('li.Backups-item', code);
                                }))
                            ],
                            m('.Backups-export', [
                                m(Button, {
                                    class: 'Button Button--primary Button--block',
                                    onclick: () => download(this.state.backups)
                                }, trans('setup_modal.backups.download_button')),
                                m(Button, {
                                    class: 'Button Button--primary Button--block',
                                    onclick: () => copy(this.state.backups.join('\n'))
                                }, trans('setup_modal.backups.copy_button'))
                            ])
                        ] : null
                    ])
                ]),
                m('.Modal-footer', [
                    m(Button, {
                        class: 'Button Button--primary Button--block',
                        onclick: this.hide.bind(this)
                    }, trans('setup_modal.close_button'))
                ])
            ];
        }

        return [
            m('.Modal-body', [
                m('.Form.Form--centered', [
                    m('.Form-group', [
                        this.state.loading
                            ? m(LoadingIndicator)
                            : [
                                this.state.enabled ? [
                                    m('p', trans('setup_modal.enter_code_disable'))
                                ] : [
                                    m('p', trans('setup_modal.scan_qr')),
                                    m('canvas.QRCode', {
                                        oncreate: vnode => {
                                            addQRCode().then(() => {
                                                QRCode.toCanvas(vnode.dom, this.state.qrCode, function (error) {
                                                    if (error) {
                                                        console.error(error);
                                                    }
                                                });
                                            });
                                        }
                                    })
                                ]
                            ]
                    ]),
                    !this.state.enabled ? m('.Form-group', [
                        !this.manually
                            ? m('a', {
                                onclick: () => this.manually = true
                            }, trans('setup_modal.enter_code_manually'))
                            : m('p.message', m('code', this.state.secret)),
                    ]) : null,
                    m('.Form-group', [
                        m('input', {
                            class: 'FormControl',
                            type: 'password',
                            placeholder: trans('setup_modal.password_placeholder'),
                            name: 'password',
                            autocomplete: 'off',
                            bidi: this.password,
                            disabled: this.loading
                        })
                    ]),
                    m('.Form-group', [
                        m('input', {
                            class: 'FormControl',
                            type: 'text',
                            placeholder: trans('setup_modal.passcode_placeholder'),
                            name: 'otp',
                            autocomplete: 'off',
                            bidi: this.code,
                            disabled: this.loading
                        })
                    ]),
                    m('.Form-group', [
                        Button.component(
                            {
                                className: 'Button Button--primary Button--block',
                                type: 'submit',
                                loading: this.loading,
                            },
                            this.state.enabled
                                ? trans('setup_modal.submit_button.disable')
                                : trans('setup_modal.submit_button.enable')
                        )
                    ])
                ])
            ])
        ]
    }

    onsubmit(e) {
        e.preventDefault();

        this.loading = true;
        this.alertAttrs = null;

        app.request({
            url: `${app.forum.attribute('apiUrl')}/twofactor`,
            method: 'PATCH',
            body: { code: this.code(), password: this.password(), secret: this.state.secret },
            errorHandler: this.onerror.bind(this),
        })
            .then(r => {
                this.enabled = r.enabled;
                this.success = true;

                if (this.canGenerateBackups && r.enabled) {
                    this.state.generateBackups();
                }
            })
            .catch(() => { })
            .then(this.loaded.bind(this));
    }

    onerror(error) {
        if (error.status === 401) {
            error.alert.content = trans('invalid_twofa_setup');
        }

        super.onerror(error);
    }
}
