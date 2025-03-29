import Modal, { IInternalModalAttrs } from "flarum/common/components/Modal";
import app from "flarum/forum/app";
import SetupAppState from "../states/SetupAppState"
import type Mithril from "mithril"
import AppSetupState, { BackupsResponse } from "../states/AppSetupState";
import TwoFactor from "../models/TwoFactor";
import Button from "flarum/common/components/Button";
import AppSetupSuccess from "./AppSetupSuccess";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import trans from "../helpers/trans";
import AppSetupQrcode from "./AppSetupQrcode";
import RequestError from "flarum/common/utils/RequestError";

export default class AppSetupModal extends Modal {
  protected static readonly isDismissibleViaEscKey: boolean = false;
  protected static readonly isDismissibleViaBackdropClick: boolean = false;


  setupState = new AppSetupState()

  oninit(vnode: Mithril.Vnode<this>) {
    super.oninit(vnode);
    this.setupState.refresh()
  }

  className() {
    return "NearataTwoFactor SetupAuthenticationApp Modal--small";
  }

  title() {
    return trans("app_setup_title");
  }

  content() {
    if (this.setupState.loading) {
      return <LoadingIndicator />;
    }

    return (
      <div class="Modal-body">
        <div class="Form Form--centered">
          <div class="Form-group">
            {this.setupState.success && <AppSetupSuccess setupState={this.setupState} />}
            {!this.setupState.success && !this.setupState.enabled && <AppSetupQrcode setupState={this.setupState} />}
            {!this.setupState.success && this.setupState.enabled && <p>{trans("app_setup_enter_code_disable")}</p>}
            {
              /*this.setupState.success ? <AppSetupSuccess setupState={this.setupState} /> : (
                this.setupState.enabled && <p>{trans("app_setup_enter_code_disable")}</p>,
                !this.setupState.enabled && <AppSetupQrcode setupState={this.setupState} />
              )*/
            }
            {
              /*this.setupState.success ? <AppSetupSuccess setupState={this.setupState} /> : (
                this.setupState.enabled ? (
                  <p>{trans("app_setup_enter_code_disable")}</p>
                ) : <AppSetupQrcode setupState={this.setupState} />
              )*/
            }
          </div>
          {
            !this.setupState.success && (
              <>
                <div class="Form-group">
                  <input
                    class="FormControl"
                    type="password"
                    placeholder={trans("app_setup_password_placeholder")}
                    name="password"
                    autocomplete="off"
                    bidi={this.setupState.password}
                    disabled={this.loading}
                  />
                </div>
                <div class="Form-group">
                  <input
                    class="FormControl"
                    type="text"
                    placeholder={trans("app_setup_passcode_placeholder")}
                    name="otp"
                    autocomplete="off"
                    bidi={this.setupState.passcode}
                    disabled={this.loading}
                  />
                </div>
              </>
            )
          }
          <div class="Form-group">
            <Button
              class="Button Button--primary Button--block"
              type="submit"
              onclick={this.setupState.success && this.hide.bind(this)}
              loading={!this.setupState.success && this.loading}
            >
              {
                this.setupState.success ? trans("app_setup_close_button_label") : (
                  this.setupState.enabled
                    ? trans("app_setup_button_label_disable")
                    : trans("app_setup_button_label_enable")
                )
              }
            </Button>
          </div>
        </div>
      </div>
    )
  }

  onsubmit(e: SubmitEvent) {
    e.preventDefault();

    if (this.setupState.success) {
      return
    }

    this.loading = true
    this.alertAttrs = null

    if (this.setupState.enabled) {
      this.requestDisabling()
    } else {
      this.requestEnabling()
    }
  }

  requestEnabling() {
    app
      .request<any>({
        url: `${app.forum.attribute("apiUrl")}/nearata/twofactor/app`,
        method: "POST",
        body: {
          passcode: this.setupState.passcode(),
          password: this.setupState.password(),
          secret: this.setupState.secret,
        },
        errorHandler: this.onerror.bind(this),
      })
      .then(async (r: BackupsResponse) => {
        this.setupState.backups.push(...r.codes)
        await this.setupState.refresh();
        this.setupState.success = true;
      })
      .catch(() => {})
      .finally(this.loaded.bind(this));
  }

  requestDisabling() {
    app
      .request<any>({
        url: `${app.forum.attribute("apiUrl")}/nearata/twofactor/app`,
        method: "DELETE",
        body: {
          passcode: this.setupState.passcode(),
          password: this.setupState.password(),
        },
        errorHandler: this.onerror.bind(this),
      })
      .then(async () => {
        await this.setupState.refresh();
        this.setupState.success = true;
      })
      .catch(() => {})
      .finally(this.loaded.bind(this));
  }

  onerror(error: RequestError) {
    if (error.status === 401 && error.alert) {
      error.alert.content = trans("app_setup_invalid_passcode");

      this.setupState.password("");
      this.setupState.passcode("");
    }

    super.onerror(error);
  }
}
