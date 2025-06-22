import Modal, { IInternalModalAttrs } from "flarum/common/components/Modal";
import { forumTranslator as trans } from "../helpers/trans";
import Mithril from "mithril";
import RequestError from "flarum/common/utils/RequestError";
import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";
import FormPasscode from "./FormPasscode";
import FormButtonSubmit from "./FormButtonSubmit";
import { providers } from "./Providers";
import { updateStore } from "../utils/updateStore";
import Button from "flarum/common/components/Button";
import SendEmailButton from "./SendEmailButton";

interface Attrs extends IInternalModalAttrs {
  route: string
}

/**
 * TODO: Make it standalone like trigger
 * password field, force 2fa type ecc.
 * perhaps feasible
 */
export default class TwoFactorModal extends Modal<Attrs> {
  protected static readonly isDismissibleViaEscKey = false
  protected static readonly isDismissibleViaBackdropClick = false

  route = Stream("")
  passcode: Stream<string> = Stream("")
  types: Array<string> = []
  selected: Stream<string> = Stream("")

  oninit(vnode: Mithril.Vnode<Attrs, this>) {
    super.oninit(vnode);
    this.route(vnode.attrs.route)

    updateStore().then(() => {
      this.types = app.store.all("twoFactor").map(i => i.type())

      if (this.types.length === 1) {
        this.selected(this.types[0])
      }

      this.loading = false
      m.redraw()
    })
  }

  className() {
    return "NearataTwoFactor Modal--small"
  }

  title() {
    return trans("login.title");
  }

  content() {
    return (
      <div className="Modal-body">
        {
          this.types.length > 1 && (
            <div className="LogInButtons">
              {providers
                  .filter((val) => this.types.includes(val.key))
                  .map((val) => {
                    return (
                      <Button
                        className={`Button LogInButton LogInButton--${val.key} hasIcon`}
                        aria-label={val.title()}
                        onclick={() => this.selected(val.key)}
                        disabled={this.selected() === val.key}
                      >
                        {val.icon({"className": "Button-icon"})}
                        {val.title()}
                      </Button>
                    );
                  })}
            </div>
          )
        }
        <div class="Form Form--centered">
          <fieldset disabled={this.loading || this.selected() === ""}>
            <FormPasscode bidi={this.passcode} />
            <FormButtonSubmit loading={this.loading} onclick={this.onsubmit.bind(this)}>
              {trans("login.submit_button_label")}
            </FormButtonSubmit>
            {this.selected() === "email" && (
              <div className="Form-group">
                <SendEmailButton />
              </div>
            )}
          </fieldset>
        </div>
      </div>
    )
  }

  onsubmit(e: SubmitEvent) {
    e.preventDefault()

    this.loading = true
    this.alertAttrs = null

    app
      .request<void>({
        url: `${app.forum.attribute("apiUrl")}/nearata/twofactor/validate`,
        method: "POST",
        body: {
          passcode: this.passcode(),
          route: this.route() || " "
        },
        errorHandler: this.onerror.bind(this),
      })
      .then(this.hide.bind(this), this.loaded.bind(this));
  }

  onerror(error: RequestError) {
    this.passcode("")
    super.onerror(error)
  }
}
