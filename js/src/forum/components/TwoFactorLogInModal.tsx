import Button from "flarum/common/components/Button";
import Modal, { IInternalModalAttrs } from "flarum/common/components/Modal";
import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";
import type Mithril from "mithril";

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

  oninit(vnode: Mithril.Vnode<this>) {
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
    return (
      <div class="Modal-body">
        <div class="Form Form--centered">
          <div class="Form-group">
            <input
              type="text"
              class="FormControl"
              placeholder={trans("log_in_modal.otp_placeholder")}
              name="otp"
              autocomplete="off"
              bidi={this.code}
              disabled={this.loading}
            />
          </div>
          <div class="Form-group">
            <Button
              class="Button Button--primary Button--block"
              type="submit"
              loading={this.loading}
            >
              {trans("log_in_modal.submit_button")}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e: SubmitEvent) {
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
