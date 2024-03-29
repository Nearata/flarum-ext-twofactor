import extendEditUserModal from "../common/extendEditUserModal";
import TwoFactorItems from "./components/TwoFactorItems";
import TwoFactorLogInModal from "./components/TwoFactorLogInModal";
import { extend, override } from "flarum/common/extend";
import app from "flarum/forum/app";
import LogInModal from "flarum/forum/components/LogInModal";
import SettingsPage from "flarum/forum/components/SettingsPage";

app.initializers.add("nearata-twofactor", () => {
  /**
   * @todo: Change to UserSecurityPage in 1.8
   */
  extend(SettingsPage.prototype, "settingsItems", function (items) {
    if (!app.session.user?.attribute("nearataTwoFactorCanEnable")) {
      return;
    }

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
