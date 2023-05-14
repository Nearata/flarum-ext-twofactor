import LoginState from "./LoginState";
import app from "flarum/forum/app";

export default class AppLoginState extends LoginState {
  get type(): string {
    return "app";
  }

  get onErrorMessage() {
    return app.translator.trans(
      `nearata-twofactor.forum.login.app.invalid_passcode`
    );
  }

  content() {
    return (
      <div class="Form-group">
        <input
          type="text"
          class="FormControl"
          placeholder={app.translator.trans(
            `nearata-twofactor.forum.login.app.passcode_placeholder`
          )}
          name="passcode"
          autocomplete="off"
          bidi={this.code}
          disabled={this.loading}
        />
      </div>
    );
  }
}
