import Modal from "flarum/common/components/Modal";
import trans from "../helpers/trans";
import EmailSetupState from "../states/EmailSetupState";
import RequestError from "flarum/common/utils/RequestError";
import Button from "flarum/common/components/Button";
import app from "flarum/forum/app";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import type Mithril from "mithril";
import SendEmailButton from "./SendEmailButton";

export default class EmailSetupModal extends Modal {
  protected static readonly isDismissibleViaEscKey: boolean = false;
  protected static readonly isDismissibleViaBackdropClick: boolean = false;

  setupState = new EmailSetupState()

  oninit(vnode: Mithril.Vnode<this>) {
    super.oninit(vnode);
    this.setupState.refresh()
  }

  className() {
    return "NearataTwoFactor EmailSetup Modal--small";
  }

  title() {
    return trans("email_setup_title");
  }

  content() {
    if (this.setupState.loading) {
      return <LoadingIndicator />;
    }

    if (this.setupState.success) {
      return (
        <div class="Modal-body">
          <p>
            {
              this.setupState.enabled
                ? trans("email_setup_success_enable")
                : trans("email_setup_success_disable")
            }
          </p>
        </div>
      )
    }

    return (
      <div class="Modal-body">
        <div class="Form Form--centered">
          {
            !this.setupState.enabled && (
              <div class="Form-group">
                <span className="helpText">{trans("email_setup_identification_helptext")}</span>
                <input
                  class="FormControl"
                  type="text"
                  placeholder={trans("email_setup_identification_placeholder")}
                  name="email"
                  autocomplete="off"
                  bidi={this.setupState.email}
                  disabled={this.loading}
                />
              </div>
            )
          }
          <div class="Form-group">
            <input
              class="FormControl"
              type="password"
              placeholder={trans("email_setup_password_placeholder")}
              name="password"
              autocomplete="off"
              bidi={this.setupState.password}
              disabled={this.loading}
            />
          </div>
          <div class="Form-group">
            <span className="helpText">{trans("email_setup_passcode_helptext")}</span>
            <input
              class="FormControl"
              type="text"
              placeholder={trans("email_setup_passcode_placeholder")}
              name="otp"
              autocomplete="off"
              bidi={this.setupState.passcode}
              disabled={this.loading}
            />
          </div>
          <div class="Form-group">
            <Button
              class="Button Button--primary Button--block"
              type="submit"
              onclick={this.setupState.success && this.hide.bind(this)}
              loading={!this.setupState.success && this.loading}
            >
              {this.setupState.success && trans("modal_close_button_label")}
              {
                !this.setupState.success && (
                  this.setupState.enabled
                    ? trans("app_setup_button_label_disable")
                    : trans("app_setup_button_label_enable")
                )
              }
            </Button>
          </div>
          <div className="Form-group">
            <SendEmailButton body={{"email": this.setupState.email}} />
          </div>
        </div>
      </div>
    )
  }

  onsubmit(e: SubmitEvent) {
    e.preventDefault();

    this.loading = true
    this.alertAttrs = null

    if (this.setupState.enabled) {
      this.requestDisable()
    } else {
      this.requestEnable()
    }
  }

  requestEnable() {
    app
      .request<void>({
        url: `${app.forum.attribute("apiUrl")}/nearata/twofactor/email`,
        method: "POST",
        body: {
          passcode: this.setupState.passcode(),
          password: this.setupState.password(),
          email: this.setupState.email(),
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

  requestDisable() {
    app
      .request<void>({
        url: `${app.forum.attribute("apiUrl")}/nearata/twofactor/email`,
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
    super.onerror(error);

    this.setupState.passcode("")
    this.setupState.password("")
  }
}
