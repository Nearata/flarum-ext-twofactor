import Component from "flarum/common/Component";
import FieldSet from "flarum/common/components/FieldSet";
import ItemList from "flarum/common/utils/ItemList";
import app from "flarum/forum/app";
import type Mithril from "mithril";
import icon from "flarum/common/helpers/icon"
import Button from "flarum/common/components/Button";
import AppSetupModal from "./AppSetupModal";

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
        <span className="helpText">{trans("section_help")}</span>
        {this.items().toArray()}
      </FieldSet>
    );
  }

  items() {
    const items = new ItemList();

    items.add(
      "app",
      <div className="AccessTokensList">
        <div className="AccessTokensList-item">
          <div className="AccessTokensList-item-icon">{icon('fas fa-mobile-alt')}</div>
          <div className="AccessTokensList-item-info">
            <div className="AccessTokensList-item-title">
              <span className="AccessTokensList-item-title-main">{trans('app_item_label')}</span>
            </div>
            <div className="AccessTokensList-item-description">
              <span className="AccessTokensList-item-description-main">{trans('app_item_description')}</span>
            </div>
          </div>
          <div className="AccessTokensList-item-actions">
            <Button className="Button Button--primary" disabled={false} loading={false} onclick={() => app.modal.show(AppSetupModal)}>
              {trans('item_manage_label')}
            </Button>
          </div>
        </div>
      </div>
    )

    return items;
  }
}
