import TwoFactorItems from "./components/TwoFactorItems";
import TwoFactorLogInModal from "./components/TwoFactorLogInModal";
import { extend, override } from "flarum/common/extend";
import app from "flarum/forum/app";
import LogInModal from "flarum/forum/components/LogInModal";
import UserSecurityPage from "flarum/forum/components/UserSecurityPage";
import TwoFactorModal from "./components/TwoFactorModal";
import SettingsPage from "flarum/forum/components/SettingsPage"
import ChangePasswordModal from "flarum/forum/components/ChangePasswordModal"
import ChangeEmailModal from "flarum/forum/components/ChangeEmailModal"

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

  extend(SettingsPage.prototype, "oninit", function () {
    this.loading = false
  })

  extend(SettingsPage.prototype, "accountItems", function (items) {
    const onClick = (item: any, route: string, modal: any) => {
      item.attrs.loading = this.loading
      item.attrs.onclick = async (_: PointerEvent) => {
        this.loading = true
        await app
          .request<void>({
            url: `${app.forum.attribute("apiUrl")}/nearata/twofactor/validate`,
            method: "GET",
            params: { route },
          })
          .then((r) => {
            if (r.validated) {
              app.modal.show(modal)
            } else {
              app.modal.show(TwoFactorModal, { route })
            }

            return r
          })
          .finally(() => {
            this.loading = false
            m.redraw()
          });
      }
    }
    const changePassword = items.get("changePassword")
    onClick(changePassword, "forgot", ChangePasswordModal);

    const changeEmail = items.get("changeEmail")
    onClick(changeEmail, "users.update", ChangeEmailModal);
  })
});

export { default as extend } from "./extend";
