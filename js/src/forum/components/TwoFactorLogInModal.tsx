import Button from "flarum/common/components/Button";
import Modal, { IInternalModalAttrs } from "flarum/common/components/Modal";
import RequestError from "flarum/common/utils/RequestError";
import app from "flarum/forum/app";
import type Mithril from "mithril";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import { LoginParams } from "flarum/common/Session";
import LoginState from "../states/LoginState";
import AppLoginState from "../states/AppLoginState";
import EmailLoginState from "../states/EmailLoginState";

export const trans = (key: string, params = {}) => {
  return app.translator.trans(`nearata-twofactor.forum.login.${key}`, params);
};

interface Attrs extends IInternalModalAttrs {
  loginParams: LoginParams
}

export default class TwoFactorLogInModal extends Modal<Attrs> {
  protected static readonly isDismissibleViaEscKey = false;
  protected static readonly isDismissibleViaBackdropClick = false;

  loginState!: LoginState
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

    const types: Record<string, any> = {
      "app": {
        icon: "fas fa-mobile-alt",
        loginState: AppLoginState
      },
      "email": {
        icon: "fas fa-envelope-open",
        loginState: EmailLoginState
      }
    }

    return [
      <div class="Modal-body">
        <div className="LogInButtons">
          {
            this.types.map(val => {
              const type = types[val]
              const title = trans(`${val}_button_label`)
              return <Button
                className={`Button LogInButton LogInButton--${val}`}
                icon={type.icon}
                aria-label={title}
                onclick={() => {
                  this.loginState = new type.loginState(this.attrs.loginParams)
                }}
                disabled={this.loginState?.type() === val}>
                  {title}
                </Button>
            })
          }
        </div>
        <div class="Form Form--centered">
          {this.loginState?.form()}
          <div class="Form-group">
            <Button
              class="Button Button--primary Button--block"
              type="submit"
              loading={this.loading}
              disabled={!!! this.loginState || this.loginState.loading || this.loading}
            >
              {trans("submit_button_label")}
            </Button>
          </div>
        </div>
      </div>
    ];
  }

  loginParams() {
    const data = {
      ...this.attrs.loginParams,
      "2FAType": this.loginState.type(),
      "2FACode": this.loginState.passcode(),
    };

    return data;
  }

  loadTypes() {
    this.loading = true
    app.request<Array<string>>({
      url: `${app.forum.attribute("apiUrl")}/nearata/twofactor`,
      method: "POST",
      body: this.attrs.loginParams
    })
    .then((r) => this.types.push(...r))
    .finally(this.loaded.bind(this));
  }

  onsubmit(e: SubmitEvent) {
    e.preventDefault();

    this.loading = true;
    this.alertAttrs = null

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
