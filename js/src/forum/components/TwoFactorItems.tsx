import SetupAppModal from "./SetupAppModal";
import Component from "flarum/common/Component";
import FieldSet from "flarum/common/components/FieldSet";
import ItemList from "flarum/common/utils/ItemList";
import app from "flarum/forum/app";
import Switch from "flarum/common/components/Switch";
import type Mithril from "mithril";

const trans = (key: string) => {
  return app.translator.trans(`nearata-twofactor.forum.settings.${key}`);
};

export default class TwoFactorItems extends Component {
  view(_: Mithril.Vnode<this>) {
    return (
      <FieldSet
        className="UserSecurityPage-nearataTwoFactor"
        label={trans("section_title")}
      >
        {this.items().toArray()}
      </FieldSet>
    );
  }

  items() {
    const items = new ItemList();

    const canEnable = app.session.user?.attribute<boolean>("nearataTwoFactorCanEnable")
    const appEnabled = app.session.user!.attribute<boolean>(
      "nearataTwoFactorAppEnabled"
    );

    items.add(
      "app",
      <div class="AuthenticationApp">
        <div class="helpText">{trans("app.button_help")}</div>
        <div class="Button--container">
          <Switch state={appEnabled} onchange={() => app.modal.show(SetupAppModal)} disabled={!canEnable}>
            {trans("app.button_label")}
          </Switch>
        </div>
      </div>
    );

    return items;
  }
}
