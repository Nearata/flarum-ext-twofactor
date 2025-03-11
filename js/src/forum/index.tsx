import extendEditUserModal from "../common/extendEditUserModal";
import TwoFactorItems from "./components/TwoFactorItems";
import TwoFactorLogInModal from "./components/TwoFactorLogInModal";
import { extend, override } from "flarum/common/extend";
import app from "flarum/forum/app";
import LogInModal from "flarum/forum/components/LogInModal";
import UserSecurityPage from "flarum/forum/components/UserSecurityPage"

app.initializers.add("nearata-twofactor", () => {
  extend(UserSecurityPage.prototype, "settingsItems", function (items) {
    items.add("nearataTwoFactor", <TwoFactorItems />);
  });

  override(LogInModal.prototype, "onerror", function (original, error) {
    if (error.responseText?.includes("has2FA")) {
      app.modal.show(TwoFactorLogInModal, {
        loginParams: this.loginParams(),
        payload: error.response,
      });
    } else {
      return original(error);
    }
  });

  extendEditUserModal();
});
