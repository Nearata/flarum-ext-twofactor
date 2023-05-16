import TwoFactorEditUser from "./components/TwoFactorEditUser";
import TwoFactorEditUserState from "./states/TwoFactorEditUserState";
import app from "flarum/common/app";
import EditUserModal from "flarum/common/components/EditUserModal";
import { extend } from "flarum/common/extend";

export default function () {
  extend(EditUserModal.prototype, "fields", function (items) {
    if (!app.session.user!.isAdmin()) {
      return;
    }

    if (app.session.user === this.attrs.user) {
      return;
    }

    const state = new TwoFactorEditUserState(this.attrs.user.id());

    items.add("nearataTwoFactor", <TwoFactorEditUser state={state} />);
  });
}
