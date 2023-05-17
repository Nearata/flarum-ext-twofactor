import extendEditUserModal from "../common/extendEditUserModal";
import app from "flarum/admin/app";

app.initializers.add("nearata-twofactor", () => {
  extendEditUserModal();

  app.extensionData
    .for("nearata-twofactor")
    .registerSetting({
      setting: "nearata-twofactor.admin.generate_backups",
      type: "boolean",
      label: app.translator.trans(
        "nearata-twofactor.admin.settings.generate_app_backups"
      ),
    })
    .registerPermission(
      {
        icon: "fas fa-shield-alt",
        label: app.translator.trans(
          "nearata-twofactor.admin.permissions.can_enable_twofactor"
        ),
        permission: "nearata-twofactor.enable",
      },
      "start"
    );
});
