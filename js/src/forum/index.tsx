import TwoFactorLogInModal from "./components/TwoFactorLogInModal";
import TwoFactorSetupModal from "./components/TwoFactorSetupModal";
import TwoFactorState from "./states/TwoFactorState";
import Button from "flarum/common/components/Button";
import { extend, override } from "flarum/common/extend";
import app from "flarum/forum/app";
import LogInModal from "flarum/forum/components/LogInModal";
import SettingsPage from "flarum/forum/components/SettingsPage";

app.initializers.add("nearata-twofactor", () => {
  extend(SettingsPage.prototype, "accountItems", function (items) {
    if (!app.session.user?.attribute("nearataTwoFactorCanEnable")) {
      return;
    }

    const onclick = () => {
      app.modal.show(TwoFactorSetupModal, {
        twoFactorState: new TwoFactorState(),
      });
    };

    items.add(
      "nearataTwoFactor",
      <Button class="Button" onclick={onclick.bind(this)}>
        {app.translator.trans("nearata-twofactor.forum.setup_button")}
      </Button>
    );
  });

  override(LogInModal.prototype, "onerror", function (original, error) {
    const response = error.response;

    if (response && "has2FA" in response && response.has2FA) {
      app.modal.show(TwoFactorLogInModal, {
        identification: this.identification(),
        password: this.password(),
        remember: this.remember(),
      });
    } else {
      return original(error);
    }
  });
});
