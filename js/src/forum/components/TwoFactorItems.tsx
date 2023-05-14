import SetupAppModal from "./SetupAppModal";
import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import FieldSet from "flarum/common/components/FieldSet";
import ItemList from "flarum/common/utils/ItemList";
import classList from "flarum/common/utils/classList";
import app from "flarum/forum/app";
import type Mithril from "mithril";

const trans = (key: string) => {
  return app.translator.trans(`nearata-twofactor.forum.settings.${key}`);
};

export default class TwoFactorItems extends Component {
  view(vnode: Mithril.Vnode<this>) {
    return (
      <FieldSet
        className="Settings-nearataTwoFactor"
        label={trans("section_title")}
      >
        {this.items().toArray()}
      </FieldSet>
    );
  }

  items() {
    const items = new ItemList();

    const appEnabled = app.session.user!.attribute<boolean>(
      "nearataTwoFactorAppEnabled"
    );

    items.add(
      "app",
      <div class="AuthenticationApp">
        <div class="helpText">{trans("app.button_help")}</div>
        <div class="Button--container">
          <Button class="Button" onclick={() => app.modal.show(SetupAppModal)}>
            {trans("app.button_label")}
          </Button>
          <span class={`status ${classList({ configured: appEnabled })}`}>
            {appEnabled ? trans("configured") : trans("not_configured")}
          </span>
        </div>
      </div>
    );

    return items;
  }
}
