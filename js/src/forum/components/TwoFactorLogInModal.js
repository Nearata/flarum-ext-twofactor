import Button from 'flarum/common/components/Button';
import Modal from 'flarum/common/components/Modal';
import Stream from 'flarum/common/utils/Stream';

const trans = key => {
    return app.translator.trans(`nearata-twofactor.forum.${key}`);
};

export default class TwoFactorLogInModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);

        const { identification, password, remember } = this.attrs;

        this.identification = identification;
        this.password = password;
        this.remember = remember;

        this.code = Stream('');
    }

    className() {
        return 'TwoFactorLogInModal Modal--small';
    }

    title() {
        return trans('log_in_modal.title');
    }

    content() {
        return [
            m('.Modal-body', [
                m('.Form.Form--centered', [
                    m('.Form-group', [
                        m('input', {
                            class: 'FormControl',
                            type: 'text',
                            placeholder: trans('log_in_modal.otp_placeholder'),
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
                            trans('log_in_modal.submit_button')
                        )
                    ])
                ])
            ])
        ];
    }

    onsubmit(e) {
        e.preventDefault();

        this.loading = true;

        const identification = this.identification;
        const password = this.password;
        const remember = this.remember;
        const twofa = this.code;

        app.session
            .login({ identification, password, remember, twofa }, { errorHandler: this.onerror.bind(this) })
            .then(() => window.location.reload(), this.loaded.bind(this));
    }

    onerror(error) {
        if (error.status === 401) {
            error.alert.content = trans('invalid_twofa_code');
        }

        super.onerror(error);
    }
}
