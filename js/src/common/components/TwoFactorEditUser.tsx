import TwoFactorEditUserState from "../states/TwoFactorEditUserState";
import Component from "flarum/common/Component";
import app from "flarum/common/app";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import Placeholder from "flarum/common/components/Placeholder";
import Switch from "flarum/common/components/Switch";
import ItemList from "flarum/common/utils/ItemList";
import extractText from "flarum/common/utils/extractText";
import type Mithril from "mithril";

const trans = (key: string) => {
  return app.translator.trans(`nearata-twofactor.lib.edit_user.${key}`);
};

export default class TwoFactorEditUser extends Component {
  apiUrl: string = app.forum.attribute("apiUrl");

  // @ts-expect-error
  state: TwoFactorEditUserState;

  appLoading!: boolean;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.state = vnode.attrs.state;
    this.state.refresh();

    this.appLoading = false;
  }

  view(vnode: Mithril.Vnode<this>) {
    return (
      <div className="Form-group EditUserModal-NearataTwoFactor">
        <label>{trans("section_title")}</label>
        {this.items().toArray()}
      </div>
    );
  }

  items() {
    const items = new ItemList();

    if (this.state.loading) {
      items.add("loading", <LoadingIndicator />);

      return items;
    }

    if (Object.values(this.state.types).every((v) => !v)) {
      items.add("empty", <Placeholder text={trans("placeholder_text")} />);
    }

    if (this.state.types.app) {
      items.add(
        "app",
        <Switch
          onchange={this.disableApp.bind(this)}
          state={true}
          loading={this.appLoading}
        >
          {trans("app.label")}
        </Switch>
      );
    }

    return items;
  }

  disableApp() {
    const confirmation = confirm(extractText(trans("disable_confirmation")));

    if (confirmation) {
      this.appLoading = true;

      app
        .request({
          method: "PATCH",
          url: `${this.apiUrl}/nearata/twofactor/app`,
          body: { userId: this.state.userId },
        })
        .then(async () => {
          await this.state.refresh();
        })
        .catch(() => {})
        .finally(() => {
          this.appLoading = false;
          m.redraw();
        });
    }
  }
}
