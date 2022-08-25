import app from "flarum/admin/app";

app.initializers.add("nearata-twofactor", () => {
    app.extensionData.for("nearata-twofactor").registerSetting({
        setting: "nearata-twofactor.admin.generate_backups",
        label: app.translator.trans(
            "nearata-twofactor.admin.settings.generate_backups"
        ),
        type: "boolean",
    });
});
