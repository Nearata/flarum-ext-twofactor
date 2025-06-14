import { forumTranslator as trans } from "../helpers/trans";
import TwoFactor from "../models/TwoFactor";
import { providers } from "./Providers";
import RecoverySetupModal from "./RecoverySetupModal";
import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import FieldSet from "flarum/common/components/FieldSet";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import icon from "flarum/common/helpers/icon";
import ItemList from "flarum/common/utils/ItemList";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class TwoFactorItems extends Component {
  loading = true;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    app.store
      .find<TwoFactor[]>("nearata/twofactor")
      .then((r) => {
        const lst = r.map((val) => val.type());

        for (const i of app.store.all<TwoFactor>("twoFactor")) {
          if (!lst.includes(i.type())) {
            app.store.remove(i);
          }
        }
      })
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }

  view(_: Mithril.Vnode<this>) {
    return (
      <FieldSet
        className="UserSecurityPage-nearataTwoFactor"
        label={trans("settings.section_title")}
      >
        {this.loading ? (
          <LoadingIndicator />
        ) : (
          [
            <span className="helpText">{trans("settings.section_help")}</span>,
            <div className="AccessTokensList">{this.items().toArray()}</div>,
            !!app.store.all("twoFactor").length && (
              <Button
                className="Button"
                icon="fas fa-key"
                onclick={() => app.modal.show(RecoverySetupModal)}
              >
                {trans("settings.recovery_item_button_label")}
              </Button>
            ),
          ]
        )}
      </FieldSet>
    );
  }

  items() {
    const items = new ItemList();

    for (const i of providers) {
      items.add(
        i.key,
        <div className="AccessTokensList-item">
          <div className="AccessTokensList-item-icon">{icon(i.icon)}</div>
          <div className="AccessTokensList-item-info">
            <div className="AccessTokensList-item-title">
              <span className="AccessTokensList-item-title-main">
                {i.title()}
              </span>
              {!!app.store.getBy("twoFactor", "type", i.key) && [
                " ",
                <span className="AccessTokensList-item-title-sub">
                  {icon("fas fa-check")}
                </span>,
              ]}
            </div>
            <div className="AccessTokensList-item-description">
              <span className="AccessTokensList-item-description-main">
                {i.desc()}
              </span>
            </div>
          </div>
          <div className="AccessTokensList-item-actions">
            <Button
              className="Button Button--primary"
              onclick={() => app.modal.show(i.setupModal)}
            >
              {trans("settings.item_manage_label")}
            </Button>
          </div>
        </div>
      );
    }

    return items;
  }
}
