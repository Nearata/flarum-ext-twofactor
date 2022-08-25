import Button from "flarum/common/components/Button";
import Modal, { IInternalModalAttrs } from "flarum/common/components/Modal";
import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";

const trans = (key: string) => {
    return app.translator.trans(`nearata-twofactor.forum.${key}`);
};

interface Attrs extends IInternalModalAttrs {
    identification: string;
    password: string;
    remember: boolean;
}

export default class TwoFactorLogInModal extends Modal<Attrs> {
    identification!: string;
    password!: string;
    remember!: boolean;
    code: Stream<string>;

    oninit(vnode: any) {
        super.oninit(vnode);

        const { identification, password, remember } = this.attrs;

        this.identification = identification;
        this.password = password;
        this.remember = remember;

        this.code = Stream("");
    }

    className() {
        return "TwoFactorLogInModal Modal--small";
    }

    title() {
        return trans("log_in_modal.title");
    }

    content() {
        return [
            m(".Modal-body", [
                m(".Form.Form--centered", [
                    m(".Form-group", [
                        m("input", {
                            class: "FormControl",
                            type: "text",
                            placeholder: trans("log_in_modal.otp_placeholder"),
                            name: "otp",
                            autocomplete: "off",
                            bidi: this.code,
                            disabled: this.loading,
                        }),
                    ]),
                    m(".Form-group", [
                        m(
                            Button,
                            {
                                className:
                                    "Button Button--primary Button--block",
                                type: "submit",
                                loading: this.loading,
                            },
                            trans("log_in_modal.submit_button")
                        ),
                    ]),
                ]),
            ]),
        ];
    }

    onsubmit(e: any) {
        e.preventDefault();

        this.loading = true;

        const identification = this.identification;
        const password = this.password;
        const remember = this.remember;
        const twofa = this.code;

        app.session
            .login(
                { identification, password, remember, twofa },
                { errorHandler: this.onerror.bind(this) }
            )
            .then(() => window.location.reload(), this.loaded.bind(this));
    }

    onerror(error: any) {
        if (error.status === 401) {
            error.alert.content = trans("invalid_twofa_code");
        }

        super.onerror(error);
    }
}
