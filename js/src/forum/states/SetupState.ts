import app from "flarum/forum/app"

export default abstract class SetupState {
  success = false
  loading = false

  abstract type(): string

  get enabled() {
    // return !! app.store.getBy<TwoFactor>("twoFactor", "type", this.type())
    return !! app.session.user!.twoFactor().filter(i => i.attribute("type") === this.type()).length
  }

  async refresh() {
    this.loading = true
    await app.store.find("users", app.session.user!.id()!).finally(() => {
      this.loading = false
      m.redraw()
    });
  }
}
