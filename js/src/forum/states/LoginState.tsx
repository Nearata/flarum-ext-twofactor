import { LoginParams } from "flarum/common/Session"
import Stream from "flarum/common/utils/Stream"
import type Mithril from "mithril"

export default abstract class LoginState {
  passcode = Stream("")
  loading = false

  loginParams: LoginParams

  constructor(loginParams: LoginParams) {
    this.loginParams = loginParams
  }

  abstract type(): string
  abstract form(): Mithril.Children

  loaded() {
    this.loading = false
    m.redraw()
  }
}
