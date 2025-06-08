import app from "flarum/forum/app"
import TwoFactor from "../models/TwoFactor"

export default abstract class SetupState {
  success = false
  loading = false
  enabled = false

  abstract type(): string

  async refresh() {
    this.loading = true
    await app.store.find<TwoFactor[]>("nearata/twofactor")
      .then((r) => {
        this.enabled = !! r.find(val => val.type() === this.type())
      })
      .finally(() => {
        const type = app.store.getBy("twoFactor", "type", this.type())
        if (!this.enabled && type) {
          app.store.remove(type)
        }

        this.loading = false
        m.redraw()
      });
  }
}
