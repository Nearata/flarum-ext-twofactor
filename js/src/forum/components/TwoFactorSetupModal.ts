import TwoFactorState from "../states/TwoFactorState";
import load from "external-load";
import Button from "flarum/common/components/Button";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import Modal, { IInternalModalAttrs } from "flarum/common/components/Modal";
import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";
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
    "https://cdn.jsdelivr.net/npm/qrcode@1.4.4/build/qrcode.min.js"
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
  isDismissible = false;

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
      return m(LoadingIndicator);
    }

    if (this.success) {
      return [
        m(".Modal-body", [
          m(".Form.Form--centered", [
            m("p.helpText", [
              this.enabled
                ? trans("setup_modal.enabled")
                : trans("setup_modal.disabled"),
            ]),
            this.canGenerateBackups && this.enabled
              ? this.backupContent()
              : null,
          ]),
        ]),
        m(".Modal-footer", [
          m(
            Button,
            {
              class: "Button Button--primary Button--block",
              onclick: this.hide.bind(this),
            },
            trans("setup_modal.close_button")
          ),
        ]),
      ];
    }

    return [
      m(".Modal-body", [
        m(".Form.Form--centered", [
          m(".Form-group", [
            this.twoFactorState.enabled
              ? m("p", trans("setup_modal.enter_code_disable"))
              : this.qrcodeContent(),
          ]),
          m(".Form-group", [
            m("input", {
              class: "FormControl",
              type: "password",
              placeholder: trans("setup_modal.password_placeholder"),
              name: "password",
              autocomplete: "off",
              bidi: this.password,
              disabled: this.loading,
            }),
          ]),
          m(".Form-group", [
            m("input", {
              class: "FormControl",
              type: "text",
              placeholder: trans("setup_modal.passcode_placeholder"),
              name: "otp",
              autocomplete: "off",
              bidi: this.code,
              disabled: this.loading,
            }),
          ]),
          m(".Form-group", [
            m(
              Button,
              {
                class: "Button Button--primary Button--block",
                type: "submit",
                loading: this.loading,
              },
              this.twoFactorState.enabled
                ? trans("setup_modal.submit_button.disable")
                : trans("setup_modal.submit_button.enable")
            ),
          ]),
        ]),
      ]),
    ];
  }

  backupContent() {
    return [
      m("p.message", trans("setup_modal.backups.modal_message")),
      m("ol.Backups-list", [
        this.twoFactorState.backups.map((code) => {
          return m("li.Backups-item", code);
        }),
      ]),
      m(".Backups-export", [
        m(
          Button,
          {
            class: "Button Button--primary Button--block",
            onclick: (_: any) => {
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
            },
          },
          trans("setup_modal.backups.download_button")
        ),
        m(
          Button,
          {
            class: "Button Button--primary Button--block",
            onclick: (_: any) => {
              navigator.clipboard.writeText(
                this.twoFactorState.backups.join("\n")
              );
            },
          },
          trans("setup_modal.backups.copy_button")
        ),
      ]),
    ];
  }

  qrcodeContent() {
    return [
      m("p", trans("setup_modal.scan_qr")),
      m("p", [
        m("canvas.QRCode", {
          oncreate: async (vnode: any) => {
            await addResources().then(() => {
              // @ts-ignore
              QRCode.toCanvas(
                vnode.dom,
                this.twoFactorState.qrCode,
                function (error) {
                  if (error) {
                    console.error(error);
                  }
                }
              );
            });
          },
        }),
      ]),
      this.manually
        ? m("p.message", [m("code", this.twoFactorState.secret)])
        : m(
            "a",
            {
              onclick: () => (this.manually = true),
            },
            trans("setup_modal.enter_code_manually")
          ),
    ];
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
