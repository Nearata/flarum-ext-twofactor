import { forumTranslator as trans } from "../helpers/trans";
import RecoverySetupState from "../states/RecoverySetupState";
import Form from "./Form";
import FormButtonClose from "./FormButtonClose";
import FormButtonSubmit from "./FormButtonSubmit";
import FormPassword from "./FormPassword";
import RecoverySetupCodes from "./RecoverySetupCodes";
import Alert from "flarum/common/components/Alert";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import Modal from "flarum/common/components/Modal";
import RequestError from "flarum/common/utils/RequestError";
import extractText from "flarum/common/utils/extractText";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class RecoverySetupModal extends Modal {
  protected static readonly isDismissibleViaEscKey: boolean = false;
  protected static readonly isDismissibleViaBackdropClick: boolean = false;

  setupState = new RecoverySetupState();

  oninit(vnode: Mithril.Vnode<this>) {
    super.oninit(vnode);
    this.setupState.refresh();
  }

  className() {
    return "NearataTwoFactor RecoverySetup Modal--small";
  }

  title() {
    return trans("settings.recovery_setup_title");
  }

  content() {
    if (this.setupState.loading) {
      return <LoadingIndicator />;
    }

    let content = [
      <FormPassword bidi={this.setupState.password} />,
      <FormButtonSubmit loading={this.loading}>
        {this.setupState.exists
          ? trans("settings.recovery_generate_delete_codes_button_label")
          : trans("settings.recovery_setup_create_button_label")}
      </FormButtonSubmit>,
    ];

    if (this.setupState.success) {
      content = [
        <RecoverySetupCodes codes={this.setupState.recoveryCodes} />,
        <FormButtonClose onclick={this.hide.bind(this)} />,
      ];
    }

    if (this.setupState.exists) {
      content.unshift(
        <div className="Form-group">
          <Alert dismissible={false} type="warning">
            {trans("settings.recovery_codes_viewed")}
          </Alert>
        </div>
      );
    }

    return <Form disabled={this.loading}>{content}</Form>;
  }

  onsubmit(e: SubmitEvent) {
    e.preventDefault();

    this.loading = true;
    this.alertAttrs = null;

    if (
      this.setupState.exists &&
      !confirm(extractText(trans("settings.recovery_confirm_message")))
    ) {
      this.loading = false;
      return;
    }

    app
      .request<Record<string, Array<string>>>({
        url: `${app.forum.attribute("apiUrl")}/nearata/twofactor/recoveryCodes`,
        method: this.setupState.exists ? "DELETE" : "POST",
        body: {
          password: this.setupState.password(),
        },
        errorHandler: this.onerror.bind(this),
      })
      .then((r) => {
        if (this.setupState.exists) {
          // DELETE
          this.setupState.password("");
          this.setupState.exists = false;
        } else {
          // POST
          this.setupState.recoveryCodes.push(...r.data);
          this.setupState.success = true;
        }
      })
      .finally(this.loaded.bind(this));
  }

  onerror(error: RequestError) {
    this.setupState.password("");

    super.onerror(error);
  }
}
