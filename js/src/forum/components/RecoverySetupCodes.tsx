import Component from "flarum/common/Component";
import type Mithril from "mithril"
import Button from "flarum/common/components/Button";
import extractText from "flarum/common/utils/extractText";
import app from "flarum/forum/app";
import { forumTranslator as trans } from "../helpers/trans";

type Attrs = {
  codes: Array<string>
}

export default class RecoverySetupBackups extends Component<Attrs> {
  view(vnode: Mithril.Vnode<Attrs, this>) {
    return (
      <div className="Form-group">
        <p class="Codes-message">{trans("settings.recovery_setup_message")}</p>
        <ol class="Codes-list">
          {vnode.attrs.codes.map((code) => {
            return <li class="Codes-item">{code}</li>;
          })}
        </ol>
        <div class="Codes-export">
          <Button
            class="Button Button--primary Button--block"
            onclick={this.onClickDownload.bind(this)}
          >
            {trans("settings.recovery_setup_download_button_label")}
          </Button>
          <Button
            class="Button Button--primary Button--block"
            onclick={this.onClickCopy.bind(this)}
          >
            {trans("settings.recovery_setup_copy_button_label")}
          </Button>
        </div>
      </div>
    )
  }

  onClickDownload(_: PointerEvent) {
    const text = trans("settings.recovery_setup_download_file_format", {
      website_title: app.forum.attribute("title"),
      website_url: app.forum.attribute("baseUrl"),
      codes: this.attrs.codes.join("\n"),
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

  onClickCopy(_: PointerEvent) {
    navigator.clipboard.writeText(this.attrs.codes.join("\n"));
  }
}
