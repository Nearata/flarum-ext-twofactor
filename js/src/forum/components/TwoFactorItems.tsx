import Component from "flarum/common/Component";
import FieldSet from "flarum/common/components/FieldSet";
import ItemList from "flarum/common/utils/ItemList";
import app from "flarum/forum/app";
import type Mithril from "mithril";
import icon from "flarum/common/helpers/icon"
import Button from "flarum/common/components/Button";
import AppSetupModal from "./AppSetupModal";
import trans from "../helpers/trans";
import EmailSetupModal from "./EmailSetupModal";

export default class TwoFactorItems extends Component {
  data = [
    {
      key: "app",
      icon: icon("fas fa-mobile-alt"),
      title: trans("app_item_label"),
      desc: trans("app_item_description"),
      modal: AppSetupModal
    },
    {
      key: "email",
      icon: icon("fas fa-envelope-open"),
      title: trans("email_item_label"),
      desc: trans("email_item_description"),
      modal: EmailSetupModal
    }
  ]

  view(_: Mithril.Vnode<this>) {
    return (
      <FieldSet
        className="UserSecurityPage-nearataTwoFactor"
        label={trans("section_title")}
      >
        <span className="helpText">{trans("section_help")}</span>
        <div className="AccessTokensList">{this.items().toArray()}</div>
      </FieldSet>
    );
  }

  items() {
    const items = new ItemList();

    for (const i of this.data) {
      items.add(
        i.key,
        <div className="AccessTokensList-item">
          <div className="AccessTokensList-item-icon">{i.icon}</div>
          <div className="AccessTokensList-item-info">
            <div className="AccessTokensList-item-title">
              <span className="AccessTokensList-item-title-main">{i.title}</span>
            </div>
            <div className="AccessTokensList-item-description">
              <span className="AccessTokensList-item-description-main">{i.desc}</span>
            </div>
          </div>
          <div className="AccessTokensList-item-actions">
            <Button className="Button Button--primary" onclick={() => app.modal.show(i.modal)}>
              {trans("item_manage_label")}
            </Button>
          </div>
        </div>
      )
    }

    return items;
  }
}
