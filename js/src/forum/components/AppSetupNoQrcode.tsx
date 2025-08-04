import Component from "flarum/common/Component";
import type Mithril from "mithril";
import { forumTranslator as trans } from "../helpers/trans";
import type { Attrs } from "./AppSetupModal";

export default class AppSetupNoQrcode extends Component<Attrs> {
  get setupState() {
    return this.attrs.setupState
  }

  view(_: Mithril.Vnode<this>) {
    return (
      <>
        {this.setupState.manually ? (
          <p className="message">
            <code>{this.setupState.secret}</code>
          </p>
        ) : (
          <a onclick={() => (this.setupState.manually = true)}>
            {trans("settings.app_setup_enter_code_manually")}
          </a>
        )}
      </>
    )
  }
}
