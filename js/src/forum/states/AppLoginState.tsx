import { trans } from "../components/TwoFactorLogInModal"
import LoginState from "./LoginState"

export default class AppLoginState extends LoginState {
  type() {
    return "app"
  }

  form() {
    return (
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
      </div>
    )
  }
}
