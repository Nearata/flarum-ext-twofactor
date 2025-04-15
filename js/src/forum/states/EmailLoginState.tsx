import { trans } from "../components/TwoFactorLogInModal"
import LoginState from "./LoginState"
import { LoginParams } from "flarum/common/Session"
import SendEmailButton from "../components/SendEmailButton"

export default class EmailLoginState extends LoginState {
  constructor(loginParams: LoginParams) {
    super(loginParams)
  }

  type() {
    return "email"
  }

  form() {
    return [
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
      </div>,
      <div className="Form-group"><SendEmailButton body={this.loginParams} /></div>
    ]
  }
}
