import { forumTranslator as trans } from "../helpers/trans";
import Component from "flarum/common/Component";
import type Mithril from "mithril";
import { Attrs } from "./AppSetupModal";

export default class AppSetupSuccess extends Component<Attrs> {
  loading = true;

  view(_: Mithril.Vnode<this>) {
    return (
      <>
        {this.attrs.setupState.enabled && (
          <p>{trans("settings.app_setup_success_enable")}</p>
        )}
        {!this.attrs.setupState.enabled &&
          trans("settings.app_setup_success_disable")}
      </>
    );
  }
}
