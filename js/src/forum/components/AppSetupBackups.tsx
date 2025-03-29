import Component from "flarum/common/Component";
import type Mithril from "mithril"
import trans from "../helpers/trans";
import Button from "flarum/common/components/Button";
import extractText from "flarum/common/utils/extractText";
import app from "flarum/forum/app";
import AppSetupState from "../states/AppSetupState";

export default class AppSetupBackups extends Component {
  setupState!: AppSetupState

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode)

    this.setupState = vnode.attrs.setupState
  }

  view(_: Mithril.Vnode<this>) {
    return (
      <>
        <p class="message">{trans("app_setup_backups_message")}</p>
        <ol class="Backups-list">
          {this.setupState.backups.map((code) => {
            return <li class="Backups-item">{code}</li>;
          })}
        </ol>
        <div class="Backups-export">
          <Button
            class="Button Button--primary Button--block"
            onclick={this.onClick.bind(this)}
            loading={this.setupState.loading}
          >
            {trans("app_setup_download_backups_button_label")}
          </Button>
          <Button
            class="Button Button--primary Button--block"
            onclick={this.onClickBackupCopy.bind(this)}
          >
            {trans("app_setup_backups_copy_button_label")}
          </Button>
        </div>
      </>
    )
  }

  onClick(_: PointerEvent) {
    const text = trans("app_setup_download_backups_file_format", {
      website_title: app.forum.attribute("title"),
      website_url: app.forum.attribute("baseUrl"),
      codes: this.setupState.backups.join("\n"),
      date: window.dayjs().format("ll"),
    });

    const blob = new Blob([extractText(text)], {
      type: "text/plain;charset=utf-8",
    });

    const a = document.createElement('a');
    a.download = "twofactor_recovery_codes.txt";
    a.href = URL.createObjectURL(blob);
    a.style.display = 'none';
    document.body.append(a);
    a.click();

    new Promise(resolve => {
      setTimeout(resolve, 100);
    })

    a.remove();
  }

  onClickBackupCopy(_: PointerEvent) {
    navigator.clipboard.writeText(this.setupState.backups.join("\n"));
  }
}
