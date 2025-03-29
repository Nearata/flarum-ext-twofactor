import Component from "flarum/common/Component";
import type Mithril from "mithril"
import trans from "../helpers/trans";
import AppSetupState from "../states/AppSetupState";
import load from "external-load"
import LoadingIndicator from "flarum/common/components/LoadingIndicator";

export default class AppSetupQrcode extends Component {
  loading = true
  setupState!: AppSetupState

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode)
    this.setupState = vnode.attrs.setupState
  }

  oncreate(vnode: Mithril.VnodeDOM<this>): void {
    super.oncreate(vnode);
    this.load();
  }

  view(_: Mithril.Vnode<this>) {
    if (this.loading) {
      return <LoadingIndicator />
    }

    return (
      <>
        <p>{trans("app_setup_scan_qr")}</p>
        <p><canvas class="QRCode" oncreate={this.render.bind(this)}></canvas></p>
        {this.setupState.manually ? (
          <p class="message">
            <code>{this.setupState.secret}</code>
          </p>
        ) : (
          <a onclick={() => (this.setupState.manually = true)}>
            {trans("app_setup_enter_code_manually")}
          </a>
        )}
      </>
    )
  }

  async load() {
    if (this.setupState.enabled) {
      return
    }

    await this.setupState.generateQRCode()

    if (typeof window.QRCode === "undefined") {
      await load.js(
        "//cdnjs.cloudflare.com/ajax/libs/qrcode/1.5.0/qrcode.min.js"
      );
    }

    this.loading = false;
    m.redraw();
  }

  render(vnode: Mithril.VnodeDOM<this>) {
    // @ts-ignore
    QRCode.toCanvas(vnode.dom, this.setupState.qrCode, function (error) {
      if (error) {
        console.error(error);
      }
    });
  }
}
