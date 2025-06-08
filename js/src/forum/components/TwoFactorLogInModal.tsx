import Button from "flarum/common/components/Button";
import Modal, { IInternalModalAttrs } from "flarum/common/components/Modal";
import RequestError from "flarum/common/utils/RequestError";
import app from "flarum/forum/app";
import type Mithril from "mithril";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import { LoginParams } from "flarum/common/Session";
import FormButtonSubmit from "./FormButtonSubmit";
import FormPasscode from "./FormPasscode";
import SendEmailButton from "./SendEmailButton";
import Stream from "flarum/common/utils/Stream";
import { forumTranslator as trans } from "../helpers/trans";
import { providers } from "./Providers";

interface Attrs extends IInternalModalAttrs {
  loginParams: LoginParams
}

export default class TwoFactorLogInModal extends Modal<Attrs> {
  protected static readonly isDismissibleViaEscKey = false;
  protected static readonly isDismissibleViaBackdropClick = false;

  types: Array<string> = []
  passcode: Stream<string> = Stream("")
  type: Stream<string> = Stream("")

  oninit(vnode: Mithril.Vnode<this>) {
    super.oninit(vnode);
    this.loadTypes()
  }

  className() {
    return "NearataTwoFactor LogInModal Modal--small";
  }

  title() {
    return trans("login.title");
  }

  content() {
    if (this.types.length === 0) {
      return <LoadingIndicator />
    }

    return (
      <div class="Modal-body">
        <div className="LogInButtons">
          {
            this.types.length > 1 && providers.filter(val => this.types.includes(val.key)).map(val => {
              return <Button
                className={`Button LogInButton LogInButton--${val}`}
                icon={val.icon}
                aria-label={val.title()}
                onclick={() => this.type(val.key)}
                disabled={this.type() === val.key}>
                  {val.title()}
                </Button>
            })
          }
        </div>
        <div class="Form Form--centered">
          <fieldset disabled={this.loading || this.type() === ''}>
            <FormPasscode bidi={this.passcode} />
            <FormButtonSubmit loading={this.loading}>{trans("login.submit_button_label")}</FormButtonSubmit>
            {
              this.type() === 'email' && (
                <div className="Form-group"><SendEmailButton body={this.loginParams()} /></div>
              )
            }
          </fieldset>
        </div>
      </div>
    )
  }

  loginParams() {
    const data = {
      ...this.attrs.loginParams,
      "2FACode": this.passcode(),
    };

    return data;
  }

  loadTypes() {
    this.loading = true
    app.request<Record<string, Array<any>>>({
      url: `${app.forum.attribute("apiUrl")}/nearata/twofactor`,
      method: "POST",
      body: this.attrs.loginParams
    })
    .then((r) => {
      this.types.push(...r.data.map(val => val.attributes.type))

      if (this.types.length === 1) {
        this.type(this.types[0])
      }
    })
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
    super.onerror(error);
  }
}
