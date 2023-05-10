// @ts-expect-error
import load from "external-load";
import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import extractText from "flarum/common/utils/extractText";
import app from "flarum/forum/app";
import type Mithril from "mithril";

const trans = (key: string, params: any = {}) => {
  return app.translator.trans(
    `nearata-twofactor.forum.settings.app.setup.enable.backups.${key}`,
    params
  );
};

export default class SetupAppDownloadBackups extends Component {
  loading!: boolean;
  backups!: Array<string>;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.loading = false;
    this.backups = vnode.attrs.backups;
  }

  oncreate(vnode: Mithril.VnodeDOM<this>): void {
    super.oncreate(vnode);
  }

  view(vnode: Mithril.Vnode<this>) {
    return (
      <Button
        class="Button Button--primary Button--block"
        onclick={this.onClick.bind(this)}
        loading={this.loading}
      >
        {trans("download_button_label")}
      </Button>
    );
  }

  async onClick(e: PointerEvent) {
    if (typeof window.saveAs === "undefined") {
      this.loading = true;

      await load.js(
        "//cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"
      );

      this.loading = false;
      m.redraw();
    }

    const title = app.forum.attribute("title");
    const baseUrl = app.forum.attribute("baseUrl");
    const backupCodes = this.backups.join("\n");

    const text = trans(`download_file_format`, {
      website_title: title,
      website_url: baseUrl,
      codes: backupCodes,
      date: window.dayjs().format("ll"),
    });

    const blob = new Blob([extractText(text)], {
      type: "text/plain;charset=utf-8",
    });

    saveAs(blob, "twofactor_recovery_codes.txt");
  }
}
