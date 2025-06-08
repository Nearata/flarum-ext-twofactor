import Modal from "flarum/common/components/Modal";
import app from "flarum/forum/app";
import type Mithril from "mithril"
import AppSetupState from "../states/AppSetupState";
import AppSetupSuccess from "./AppSetupSuccess";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import AppSetupQrcode from "./AppSetupQrcode";
import RequestError from "flarum/common/utils/RequestError";
import Form from "./Form";
import FormButtonClose from "./FormButtonClose";
import FormButtonSubmit from "./FormButtonSubmit";
import FormPassword from "./FormPassword";
import FormPasscode from "./FormPasscode";
import { forumTranslator as trans } from "../helpers/trans";

export default class AppSetupModal extends Modal {
  protected static readonly isDismissibleViaEscKey: boolean = false;
  protected static readonly isDismissibleViaBackdropClick: boolean = false;

  setupState = new AppSetupState()

  oninit(vnode: Mithril.Vnode<this>) {
    super.oninit(vnode);
    this.setupState.refresh()
  }

  className() {
    return "NearataTwoFactor AppSetup Modal--small";
  }

  title() {
    return trans("settings.app_setup_title");
  }

  content() {
    if (this.setupState.loading) {
      return <LoadingIndicator />;
    }

    return (
      <Form disabled={this.loading}>
        <div className="Form-group">
          {this.setupState.success && <AppSetupSuccess setupState={this.setupState} />}
          {!this.setupState.success && !this.setupState.enabled && <AppSetupQrcode setupState={this.setupState} />}
          {!this.setupState.success && this.setupState.enabled && <p>{trans("settings.app_setup_enter_code_disable")}</p>}
        </div>
        {this.setupState.success && <FormButtonClose onclick={this.hide.bind(this)} />}
        {
          !this.setupState.success && [
            <FormPassword bidi={this.setupState.password} />,
            <FormPasscode bidi={this.setupState.passcode} />,
            <FormButtonSubmit loading={this.loading}>
              {
                this.setupState.enabled
                  ? trans("settings.modal_disable_button_label")
                  : trans("settings.modal_enable_button_label")
              }
            </FormButtonSubmit>
          ]
        }
      </Form>
    )
  }

  onsubmit(e: SubmitEvent) {
    e.preventDefault();

    this.loading = true
    this.alertAttrs = null

    app
      .request<void>({
        url: `${app.forum.attribute("apiUrl")}/nearata/twofactor/app`,
        method: this.setupState.enabled ? "DELETE" : "POST",
        body: {
          passcode: this.setupState.passcode(),
          password: this.setupState.password(),
          secret: this.setupState.secret
        },
        errorHandler: this.onerror.bind(this),
      })
      .then(async () => {
        await this.setupState.refresh();
        this.setupState.success = true;
      })
      .finally(this.loaded.bind(this));
  }

  onerror(error: RequestError) {
    this.setupState.password("");
    this.setupState.passcode("");

    super.onerror(error);
  }
}
