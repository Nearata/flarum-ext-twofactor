import app from "flarum/admin/app";

app.initializers.add("nearata-twofactor", () => {
  app.extensionData
    .for("nearata-twofactor")
    .registerSetting(
      {
        setting: "nearata-twofactor.appNumberOfGeneratedBackupCodes",
        type: "number",
        label: app.translator.trans(
          "nearata-twofactor.admin.settings.app_number_of_generated_backup_codes"
        ),
        min: "0"
      }
    )
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
