import Component from "flarum/common/Component";
import type Mithril from "mithril"
import AppSetupState from "../states/AppSetupState";
import trans from "../helpers/trans";
import AppSetupBackups from "./AppSetupBackups";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";

export default class AppSetupSuccess extends Component {
  loading = true
  setupState!: AppSetupState

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode)

    this.setupState = vnode.attrs.setupState
    this.setupState.refresh().finally(() => {
      this.loading = false
      m.redraw()
    })
  }

  view(_: Mithril.Vnode<this>) {
    if (this.loading) {
      return <LoadingIndicator />
    }

    /*if (this.setupState.enabled) {
      return (
        <>
          <p>{trans("app_setup_success_enable")}</p>
          <AppSetupBackups setupState={this.setupState} />
        </>
      )
    } else {
      return <p>{trans("app_setup_success_disable")}</p>
    }*/

    return (
      <>
        {this.setupState.enabled && <p>{trans("app_setup_success_enable")}</p>}
        {!this.setupState.enabled && trans("app_setup_success_disable")}
        {this.setupState.enabled && <AppSetupBackups setupState={this.setupState} />}
        {
          /*this.setupState.enabled ? (
            <>
              <p>{trans("app_setup_success_enable")}</p>
              {<AppSetupBackups setupState={this.setupState} />}
            </>
          ) : (
            trans("app_setup_success_disable")
          )*/
        }
      </>
    )
  }
}
