import app from "flarum/forum/app";
import TwoFactor from "../models/TwoFactor";

export async function updateStore() {
  return app.store
    .find<TwoFactor[]>("nearata/twofactor")
    .then((r) => {
      const lst = r.map((val) => val.type());

      for (const i of app.store.all<TwoFactor>("twoFactor")) {
        if (!lst.includes(i.type())) {
          app.store.remove(i);
        }
      }
    });
}
