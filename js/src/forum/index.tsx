import TwoFactorItems from "./components/TwoFactorItems";
import TwoFactorLogInModal from "./components/TwoFactorLogInModal";
import { extend, override } from "flarum/common/extend";
import app from "flarum/forum/app";
import LogInModal from "flarum/forum/components/LogInModal";
import UserSecurityPage from "flarum/forum/components/UserSecurityPage";

app.initializers.add("nearata-twofactor", () => {
  extend(UserSecurityPage.prototype, "settingsItems", function (items) {
    items.add("nearataTwoFactor", <TwoFactorItems />);
  });

  override(LogInModal.prototype, "onerror", function (original, error) {
    if (error.responseText?.includes("twofactor_login_init")) {
      app.modal.show(TwoFactorLogInModal, {
        loginParams: this.loginParams(),
      });
    } else {
      return original(error);
    }
  });
});

export { default as extend } from "./extend";
