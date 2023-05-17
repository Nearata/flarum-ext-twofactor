import AppLoginState from "../states/AppLoginState";
import LoginState from "../states/LoginState";
import Button from "flarum/common/components/Button";
import Modal from "flarum/common/components/Modal";
import Placeholder from "flarum/common/components/Placeholder";
import ItemList from "flarum/common/utils/ItemList";
import RequestError from "flarum/common/utils/RequestError";
import app from "flarum/forum/app";
import type Mithril from "mithril";

const trans = (key: string) => {
  return app.translator.trans(`nearata-twofactor.forum.login.${key}`);
};

export default class TwoFactorLogInModal extends Modal {
  protected static readonly isDismissibleViaEscKey = false;
  protected static readonly isDismissibleViaBackdropClick = false;

  payload!: any;
  loginState: undefined | LoginState;

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
        <div class="LogInButtons">{this.authButtons().toArray()}</div>
        <div class="Form Form--centered">
          {this.loginState?.content()}
          <div class="Form-group">
            <Button
              class="Button Button--primary Button--block"
              type="submit"
              loading={this.loading}
              disabled={this.loading || typeof this.loginState === "undefined"}
            >
              {trans("submit_button_label")}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  authButtons() {
    const items = new ItemList();

    if (this.payload.type.app) {
      items.add(
        "app",
        <Button
          class="Button Button--Auth-app"
          onclick={() => {
            this.loginState = new AppLoginState();
          }}
          disabled={this.loginState?.type === "app"}
        >
          {trans("auth_buttons.app")}
        </Button>
      );
    }

    if (!this.loginState) {
      items.add(
        "undefinedState",
        <Placeholder text="Choose an authentication method..." />
      );
    }

    return items;
  }

  onsubmit(e: SubmitEvent) {
    e.preventDefault();

    if (typeof this.loginState === "undefined") {
      return;
    }

    this.loading = true;
    this.loginState.loading = true;

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
      "2FAType": this.loginState?.type,
      "2FACode": this.loginState?.code(),
    };

    return data;
  }

  onerror(error: RequestError) {
    if (error.status === 401 && error.alert) {
      error.alert.content = this.loginState?.onErrorMessage;

      this.loginState?.code("");
      this.loginState!.loading = false;
    }

    super.onerror(error);
  }
}
