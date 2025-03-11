import Button from "flarum/common/components/Button";
import Modal from "flarum/common/components/Modal";
import RequestError from "flarum/common/utils/RequestError";
import app from "flarum/forum/app";
import Stream from "flarum/common/utils/Stream";
import Select from "flarum/common/components/Select"
import type Mithril from "mithril";

const trans = (key: string) => {
  return app.translator.trans(`nearata-twofactor.forum.login.${key}`);
};

export default class TwoFactorLogInModal extends Modal {
  protected static readonly isDismissibleViaEscKey = false;
  protected static readonly isDismissibleViaBackdropClick = false;

  passcode: Stream<string> = Stream("");
  type: Stream<string> = Stream("app");
  payload!: any;

  oninit(vnode: Mithril.Vnode<this>) {
    super.oninit(vnode);

    this.payload = vnode.attrs.payload;
  }

  className() {
    return "NearataTwoFactor LogInModal Modal--small";
  }

  title() {
    return trans("title");
  }

  content() {
    return (
      <div class="Modal-body">
        <div class="Form Form--centered">
          <div class="Form-group">
            <input
              type="text"
              class="FormControl"
              placeholder={trans(`passcode_placeholder`)}
              name="passcode"
              autocomplete="off"
              bidi={this.passcode}
              disabled={this.loading}
            />
          </div>
          <div class="Form-group">
            <Select
              options={{
                app: trans("auth_buttons.app")
              }}
              onchange={(value: string) => this.type(value)}
              value={this.type()}
              disabled={this.loading}
            />
          </div>
          <div class="Form-group">
            <Button
              class="Button Button--primary Button--block"
              type="submit"
              loading={this.loading}
              disabled={this.loading}
            >
              {trans("submit_button_label")}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e: SubmitEvent) {
    e.preventDefault();

    this.loading = true;

    app
      .request({
        method: "POST",
        url: `${app.forum.attribute("baseUrl")}/nearata/twofactor/login`,
        body: this.loginParams(),
        errorHandler: this.onerror.bind(this),
      })
      .then(() => window.location.reload(), this.loaded.bind(this));
  }

  loginParams() {
    const data = {
      ...this.attrs.loginParams,
      "2FAType": this.type,
      "2FACode": this.passcode(),
    };

    return data;
  }

  onerror(error: RequestError) {
    if (error.status === 401 && error.alert) {
      error.alert.content = trans("invalid_passcode");
      this.passcode("");
      this.loading = false;
    }

    super.onerror(error);
  }
}
