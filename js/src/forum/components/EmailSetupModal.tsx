import { forumTranslator as trans } from "../helpers/trans";
import EmailSetupState from "../states/EmailSetupState";
import Form from "./Form";
import FormButtonClose from "./FormButtonClose";
import FormButtonSubmit from "./FormButtonSubmit";
import FormPasscode from "./FormPasscode";
import FormPassword from "./FormPassword";
import SendEmailButton from "./SendEmailButton";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import Modal from "flarum/common/components/Modal";
import RequestError from "flarum/common/utils/RequestError";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class EmailSetupModal extends Modal {
  protected static readonly isDismissibleViaEscKey: boolean = false;
  protected static readonly isDismissibleViaBackdropClick: boolean = false;

  setupState = new EmailSetupState();

  oninit(vnode: Mithril.Vnode<this>) {
    super.oninit(vnode);
    this.setupState.refresh();
  }

  className() {
    return "NearataTwoFactor EmailSetup Modal--small";
  }

  title() {
    return trans("settings.email_setup_title");
  }

  content() {
    if (this.setupState.loading) {
      return <LoadingIndicator />;
    }

    return (
      <Form disabled={this.loading}>
        {this.setupState.success
          ? [
              <p>
                {this.setupState.enabled
                  ? trans("settings.email_setup_success_enable")
                  : trans("settings.email_setup_success_disable")}
              </p>,
              <FormButtonClose onclick={this.hide.bind(this)} />,
            ]
          : [
              !this.setupState.enabled && (
                <div className="Form-group">
                  <span className="helpText">
                    {trans("settings.email_setup_identification_helptext")}
                  </span>
                  <input
                    className="FormControl"
                    type="text"
                    placeholder={trans(
                      "settings.email_setup_identification_placeholder"
                    )}
                    aria-label={trans(
                      "settings.email_setup_identification_placeholder"
                    )}
                    name="email"
                    autocomplete="off"
                    bidi={this.setupState.email}
                  />
                </div>
              ),
              <FormPassword bidi={this.setupState.password} />,
              <span className="helpText">
                {trans("settings.email_setup_passcode_helptext")}
              </span>,
              <FormPasscode bidi={this.setupState.passcode} />,
              <FormButtonSubmit loading={this.loading}>
                {this.setupState.enabled
                  ? trans("settings.modal_disable_button_label")
                  : trans("settings.modal_enable_button_label")}
              </FormButtonSubmit>,
              <div className="Form-group">
                <SendEmailButton body={{ email: this.setupState.email }} />
              </div>,
            ]}
      </Form>
    );
  }

  onsubmit(e: SubmitEvent) {
    e.preventDefault();

    this.loading = true;
    this.alertAttrs = null;

    app
      .request<void>({
        url: `${app.forum.attribute("apiUrl")}/nearata/twofactor/email`,
        method: this.setupState.enabled ? "DELETE" : "POST",
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
      .finally(this.loaded.bind(this));
  }

  onerror(error: RequestError) {
    this.setupState.passcode("");
    this.setupState.password("");

    super.onerror(error);
  }
}
