import { forumTranslator as trans } from "../helpers/trans";
import load from "external-load";
import Component from "flarum/common/Component";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import type Mithril from "mithril";
import { Attrs } from "./AppSetupModal";

export default class AppSetupQrcode extends Component<Attrs> {
  loading = true;

  oncreate(vnode: Mithril.VnodeDOM<this>): void {
    super.oncreate(vnode);
    this.load();
  }

  view(_: Mithril.Vnode<this>) {
    if (this.loading) {
      return <LoadingIndicator />;
    }

    return (
      <>
        <p>{trans("settings.app_setup_scan_qr")}</p>
        <p><canvas className="QRCode" oncreate={this.render.bind(this)}></canvas></p>
      </>
    );
  }

  get setupState() {
    return this.attrs.setupState;
  }

  async load() {
    if (this.setupState.enabled) {
      return;
    }

    await this.setupState.generateQRCode();

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
