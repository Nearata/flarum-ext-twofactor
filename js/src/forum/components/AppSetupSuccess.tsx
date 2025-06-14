import { forumTranslator as trans } from "../helpers/trans";
import AppSetupState from "../states/AppSetupState";
import Component from "flarum/common/Component";
import type Mithril from "mithril";

export default class AppSetupSuccess extends Component {
  loading = true;
  setupState!: AppSetupState;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);
    this.setupState = vnode.attrs.setupState;
  }

  view(_: Mithril.Vnode<this>) {
    return (
      <>
        {this.setupState.enabled && (
          <p>{trans("settings.app_setup_success_enable")}</p>
        )}
        {!this.setupState.enabled &&
          trans("settings.app_setup_success_disable")}
      </>
    );
  }
}
