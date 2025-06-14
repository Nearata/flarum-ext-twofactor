import SetupState from "./SetupState";
import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";

type Response = {
  exists: boolean;
};

export default class RecoverySetupState extends SetupState {
  password: Stream<string> = Stream("");
  recoveryCodes: Array<string> = [];
  exists: boolean = false;

  type() {
    return "recovery_codes";
  }

  async refresh() {
    this.loading = true;
    app
      .request<Response>({
        url: `${app.forum.attribute("apiUrl")}/nearata/twofactor/recoveryCodes`,
      })
      .then((r) => (this.exists = r.exists))
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
