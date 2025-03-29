import Button from "flarum/common/components/Button";
import Modal, { IInternalModalAttrs } from "flarum/common/components/Modal";
import RequestError from "flarum/common/utils/RequestError";
import app from "flarum/forum/app";
import Stream from "flarum/common/utils/Stream";
import Select from "flarum/common/components/Select"
import type Mithril from "mithril";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import { LoginParams } from "flarum/common/Session";

const trans = (key: string) => {
  return app.translator.trans(`nearata-twofactor.forum.login.${key}`);
};

interface Attrs extends IInternalModalAttrs {
  loginParams: LoginParams
}

export default class TwoFactorLogInModal extends Modal<Attrs> {
  protected static readonly isDismissibleViaEscKey = false;
  protected static readonly isDismissibleViaBackdropClick = false;

  type: Stream<string> = Stream("app");
  passcode: Stream<string> = Stream("");
  types: Array<string> = []

  oninit(vnode: Mithril.Vnode<this>) {
    super.oninit(vnode);
    this.loadTypes()
  }

  className() {
    return "NearataTwoFactor LogInModal Modal--small";
  }

  title() {
    return trans("title");
  }

  content() {
    if (this.types.length === 0) {
      return <LoadingIndicator />
    }

    const types = Object.fromEntries(
      this.types.map(val => [val, trans(`${val}_button_label`)])
    );

    return (
      <div class="Modal-body">
        <div class="Form Form--centered">
          <div class="Form-group">
            <input
              type="text"
              class="FormControl"
              placeholder={trans("passcode_placeholder")}
              name="passcode"
              autocomplete="off"
              bidi={this.passcode}
              disabled={this.loading}
            />
          </div>
          <div class="Form-group">
            <Select
              options={types}
              onchange={this.type}
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

  loginParams() {
    const data = {
      ...this.attrs.loginParams,
      "2FAType": this.type(),
      "2FACode": this.passcode(),
    };

    return data;
  }

  loadTypes() {
    this.loading = true

    app
      .request<any>({
        url: `${app.forum.attribute("apiUrl")}/nearata/twofactor`,
        method: "POST",
        body: this.attrs.loginParams
      })
      .then((r) => {
        this.types.push(...r)
      })
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }

  onsubmit(e: SubmitEvent) {
    e.preventDefault();

    this.loading = true;

    app.session.login(this.loginParams(), {
      errorHandler: this.onerror.bind(this)
    }).then(() => window.location.reload(), this.loaded.bind(this));
  }

  onerror(error: RequestError) {
    if (error.status === 401 && error.alert) {
      error.alert.content = trans("invalid_passcode");
      this.loading = false;
    }

    super.onerror(error);
  }
}
