import TwoFactorState from "../states/TwoFactorState";
import load from "external-load";
import Button from "flarum/common/components/Button";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import Modal, { IInternalModalAttrs } from "flarum/common/components/Modal";
import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";
import type Mithril from "mithril";
import type QRCode from "qrcode";

interface Attrs extends IInternalModalAttrs {
  twoFactorState: TwoFactorState;
}

type UpdateResponse = {
  enabled: boolean;
};

let loaded = false;

const addResources = async () => {
  if (loaded) {
    return;
  }

  await load.js(
    "https://cdnjs.cloudflare.com/ajax/libs/qrcode/1.5.0/qrcode.min.js"
  );

  await load.js(
    "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"
  );

  loaded = true;
};

const trans = (key: string, options = {}) => {
  return app.translator.trans(`nearata-twofactor.forum.${key}`, options);
};

export default class TwoFactorSetupModal extends Modal<Attrs> {
  protected static readonly isDismissibleViaEscKey: boolean = false;
  protected static readonly isDismissibleViaBackdropClick: boolean = false;

  twoFactorState!: TwoFactorState;
  success!: boolean;
  enabled!: boolean;
  manually!: boolean;
  password!: Stream<string>;
  code!: Stream<string>;
  canGenerateBackups!: boolean;

  oninit(vnode: any) {
    super.oninit(vnode);

    this.twoFactorState = this.attrs.twoFactorState;
    this.twoFactorState.refresh();

    this.success = false;
    this.enabled = false;
    this.manually = false;

    this.password = Stream("");
    this.code = Stream("");

    this.canGenerateBackups = app.forum.attribute("canGenerateBackups");
  }

  className() {
    return "TwoFactorSetupModal Modal--small";
  }

  title() {
    return trans("setup_modal.title");
  }

  content() {
    if (this.twoFactorState.loading) {
      return <LoadingIndicator />;
    }

    if (this.success) {
      return (
        <div>
          <div class="Modal-body">
            <div class="Form Form--centered">
              <p class="helpText">
                {this.enabled
                  ? trans("setup_modal.enabled")
                  : trans("setup_modal.disabled")}
              </p>
              {this.canGenerateBackups && this.enabled && this.backupContent()}
            </div>
          </div>
          <div class="Modal-footer">
            <Button
              class="Button Button--primary Button--block"
              onclick={this.hide.bind(this)}
            >
              {trans("setup_modal.close_button")}
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
              {this.twoFactorState.enabled ? (
                <p>{trans("setup_modal.enter_code_disable")}</p>
              ) : (
                this.qrcodeContent()
              )}
            </div>
            <div class="Form-group">
              <input
                class="FormControl"
                type="password"
                placeholder={trans("setup_modal.password_placeholder")}
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
                placeholder={trans("setup_modal.passcode_placeholder")}
                name="otp"
                autocomplete="off"
                bidi={this.code}
                disabled={this.loading}
              />
            </div>
            <div class="Form-group">
              <Button
                class="Button Button--primary Button--block"
                type="submit"
                loading={this.loading}
              >
                {this.twoFactorState.enabled
                  ? trans("setup_modal.submit_button.disable")
                  : trans("setup_modal.submit_button.enable")}
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
        <p class="message">{trans("setup_modal.backups.modal_message")}</p>
        <ol class="Backups-list">
          {this.twoFactorState.backups.map((code) => {
            return <li class="Backups-item">{code}</li>;
          })}
        </ol>
        <div class="Backups-export">
          <Button
            class="Button Button--primary Button--block"
            onclick={this.onClickBackupDownload.bind(this)}
          >
            {trans("setup_modal.backups.download_button")}
          </Button>
          <Button
            class="Button Button--primary Button--block"
            onclick={this.onClickBackupCopy.bind(this)}
          >
            {trans("setup_modal.backups.copy_button")}
          </Button>
        </div>
      </div>
    );
  }

  onClickBackupDownload(_: PointerEvent) {
    const title = app.forum.attribute("title");
    const baseUrl = app.forum.attribute("baseUrl");
    const backupCodes = this.twoFactorState.backups.join("\n");

    const text = trans("setup_modal.backups.download_file_format", {
      website_title: title,
      website_url: baseUrl,
      codes: backupCodes,
      date: window.dayjs().format("ll"),
    });

    const blob = new Blob(text, {
      type: "text/plain;charset=utf-8",
    });

    saveAs(blob, "twofactor_recovery_codes.txt");
  }

  onClickBackupCopy(_: PointerEvent) {
    navigator.clipboard.writeText(this.twoFactorState.backups.join("\n"));
  }

  qrcodeContent() {
    return (
      <div>
        <p>{trans("setup_modal.scan_qr")}</p>
        <p>
          <canvas
            class="QRCode"
            oncreate={this.onCreateQrCode.bind(this)}
          ></canvas>
        </p>
        {this.manually ? (
          <p class="message">
            <code>{this.twoFactorState.secret}</code>
          </p>
        ) : (
          <a onclick={() => (this.manually = true)}>
            {trans("setup_modal.enter_code_manually")}
          </a>
        )}
      </div>
    );
  }

  async onCreateQrCode(vnode: Mithril.VnodeDOM<this>) {
    await addResources().then(() => {
      // @ts-ignore
      QRCode.toCanvas(vnode.dom, this.twoFactorState.qrCode, function (error) {
        if (error) {
          console.error(error);
        }
      });
    });
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
          code: this.code(),
          password: this.password(),
          secret: this.twoFactorState.secret,
        },
        errorHandler: this.onerror.bind(this),
      })
      .then((r: UpdateResponse) => {
        this.enabled = r.enabled;
        this.success = true;

        if (this.canGenerateBackups && r.enabled) {
          this.twoFactorState.generateBackups();
        }
      })
      .catch(() => {})
      .then(this.loaded.bind(this));
  }

  onerror(error: any) {
    if (error.status === 401) {
      error.alert.content = trans("invalid_twofa_setup");
    }

    super.onerror(error);
  }
}
