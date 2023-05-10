// @ts-expect-error
import load from "external-load";
import Component from "flarum/common/Component";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import type Mithril from "mithril";

export default class SetupAppQRCode extends Component {
  loading!: boolean;
  qrcode!: string;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.loading = true;
    this.qrcode = vnode.attrs.qrcode;
  }

  oncreate(vnode: Mithril.VnodeDOM<this>): void {
    super.oncreate(vnode);

    this.loadResource();
  }

  view(vnode: Mithril.Vnode<this>) {
    if (this.loading) {
      return <LoadingIndicator />;
    }

    return <canvas class="QRCode" oncreate={this.render.bind(this)}></canvas>;
  }

  async loadResource() {
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
    QRCode.toCanvas(vnode.dom, this.qrcode, function (error) {
      if (error) {
        console.error(error);
      }
    });
  }
}
