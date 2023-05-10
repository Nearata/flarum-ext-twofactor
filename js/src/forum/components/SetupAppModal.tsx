import AppState from "../states/AppState";
import SetupAppDownloadBackups from "./SetupAppDownloadBackups";
import SetupAppQRCode from "./SetupAppQRCode";
import Button from "flarum/common/components/Button";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import Modal from "flarum/common/components/Modal";
import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";

const trans = (key: string, options = {}) => {
  return app.translator.trans(
    `nearata-twofactor.forum.settings.app.setup.${key}`,
    options
  );
};

type UpdateResponse = {
  enabled: boolean;
};

export default class SetupAppModal extends Modal {
  protected static readonly isDismissibleViaEscKey: boolean = false;
  protected static readonly isDismissibleViaBackdropClick: boolean = false;

  appState!: AppState;
  success!: boolean;
  enabled!: boolean;
  manually!: boolean;
  password!: Stream<string>;
  passcode!: Stream<string>;
  canGenerateBackups!: boolean;

  oninit(vnode: any) {
    super.oninit(vnode);

    this.appState = new AppState();
    this.appState.refresh();

    this.success = false;
    this.enabled = false;
    this.manually = false;

    this.password = Stream("");
    this.passcode = Stream("");

    this.canGenerateBackups = app.forum.attribute("canGenerateBackups");
  }

  className() {
    return "NearataTwoFactor SetupAuthenticationApp Modal--small";
  }

  title() {
    return trans("title");
  }

  content() {
    if (this.appState.loading) {
      return <LoadingIndicator />;
    }

    if (this.success) {
      return (
        <div>
          <div class="Modal-body">
            <div class="Form Form--centered">
              <p>
                {this.enabled
                  ? trans("enable.success")
                  : trans("disable.success")}
              </p>
              {this.enabled && this.canGenerateBackups && this.backupContent()}
            </div>
          </div>
          <div class="Modal-footer">
            <Button
              class="Button Button--primary Button--block"
              onclick={this.hide.bind(this)}
            >
              {trans("close_button_label")}
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div class="Modal-body">
          <div class="Form Form--centered">
            <div class="Form-group">
              {this.appState.enabled ? (
                <p>{trans("disable.enter_code_disable")}</p>
              ) : (
                this.qrcodeContent()
              )}
            </div>
            <div class="Form-group">
              <input
                class="FormControl"
                type="password"
                placeholder={trans("password_placeholder")}
                name="password"
                autocomplete="off"
                bidi={this.password}
                disabled={this.loading}
              />
            </div>
            <div class="Form-group">
              <input
                class="FormControl"
                type="text"
                placeholder={trans("passcode_placeholder")}
                name="otp"
                autocomplete="off"
                bidi={this.passcode}
                disabled={this.loading}
              />
            </div>
            <div class="Form-group">
              <Button
                class="Button Button--primary Button--block"
                type="submit"
                loading={this.loading}
              >
                {this.appState.enabled
                  ? trans("disable.button_label")
                  : trans("enable.button_label")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  backupContent() {
    return (
      <div>
        <p class="message">{trans("enable.backups.message")}</p>
        <ol class="Backups-list">
          {this.appState.backups.map((code) => {
            return <li class="Backups-item">{code}</li>;
          })}
        </ol>
        <div class="Backups-export">
          <SetupAppDownloadBackups backups={this.appState.backups} />
          <Button
            class="Button Button--primary Button--block"
            onclick={this.onClickBackupCopy.bind(this)}
          >
            {trans("enable.backups.copy_button_label")}
          </Button>
        </div>
      </div>
    );
  }

  onClickBackupCopy(_: PointerEvent) {
    navigator.clipboard.writeText(this.appState.backups.join("\n"));
  }

  qrcodeContent() {
    return (
      <div>
        <p>{trans("enable.scan_qr")}</p>
        <p>
          <SetupAppQRCode qrcode={this.appState.qrCode} />
        </p>
        {this.manually ? (
          <p class="message">
            <code>{this.appState.secret}</code>
          </p>
        ) : (
          <a onclick={() => (this.manually = true)}>
            {trans("enable.enter_code_manually")}
          </a>
        )}
      </div>
    );
  }

  onsubmit(e: any) {
    e.preventDefault();

    this.loading = true;
    this.alertAttrs = null;

    app
      .request<any>({
        url: `${app.forum.attribute("apiUrl")}/twofactor`,
        method: "PATCH",
        body: {
          code: this.passcode(),
          password: this.password(),
          secret: this.appState.secret,
        },
        errorHandler: this.onerror.bind(this),
      })
      .then((r: UpdateResponse) => {
        this.enabled = r.enabled;
        this.success = true;

        if (this.canGenerateBackups && r.enabled) {
          this.appState.generateBackups();
        }
      })
      .catch(() => {})
      .finally(this.loaded.bind(this));
  }

  onerror(error: any) {
    if (error.status === 401) {
      error.alert.content = trans("invalid_passcode");
    }

    super.onerror(error);
  }
}
