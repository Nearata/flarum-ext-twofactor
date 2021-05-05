import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Modal from 'flarum/common/components/Modal';
import Stream from 'flarum/common/utils/Stream';

import QRCode from 'qrcode';


const trans = key => {
    return app.translator.trans(`nearata-twofactor.forum.${key}`);
};

export default class TwoFactorSetupModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);

        this.state = this.attrs.twoFactorState;
        this.state.refresh();

        this.success = false;
        this.activated = false;

        this.code = Stream('');
    }

    className() {
        return 'TwoFactorModal Modal--small';
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
                            this.activated
                            ? trans('setup_modal.enabled')
                            : trans('setup_modal.disabled')
                        ]),
                        m(Button, {
                            class: 'Button Button--primary Button--block',
                            onclick: this.hide.bind(this)
                        }, trans('setup_modal.close_button'))
                    ])
                ])
            ];
        }

        return [
            m('.Modal-body', [
                m('.Form.Form--centered', [
                    m('.Form-group', [
                        this.state.loading ? m(LoadingIndicator) : [
                            this.state.enabled ? [
                                m('p', trans('setup_modal.enter_code_disable'))
                            ] : [
                                m('canvas', {
                                    oncreate: vnode => {
                                        QRCode.toCanvas(vnode.dom, this.state.qrCode, function (error) {
                                            if (error) {
                                                console.error(error);
                                            }
                                        });
                                    }
                                })
                            ]
                        ]
                    ]),
                    m('.Form-group', [
                        m('code.otp-secret', this.state.secret)
                    ]),
                    m('.Form-group', [
                        m('input', {
                            class: 'FormControl',
                            type: 'number',
                            placeholder: trans('setup_modal.placeholder'),
                            name: 'otp',
                            autocomplete: 'off',
                            oninput: e => this.code(e.target.value),
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
            body: { code: this.code(), secret: this.state.secret },
            errorHandler: this.onerror.bind(this),
        })
        .then(r => {
            this.activated = r['status'];
            this.success = true;
        })
        .catch(() => {})
        .then(this.loaded.bind(this));
    }

    onerror(error) {
        if (error.status === 401) {
            error.alert.content = trans('invalid_twofa_code');
        }

        super.onerror(error);
    }
}
