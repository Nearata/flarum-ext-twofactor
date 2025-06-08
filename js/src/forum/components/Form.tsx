import Component from "flarum/common/Component";
import type Mithril from "mithril"

type Attrs = {
  disabled: boolean
}

export default class Form extends Component {
  view(vnode: Mithril.Vnode<Attrs, this>) {
    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <fieldset disabled={vnode.attrs.disabled}>{vnode.children}</fieldset>
        </div>
      </div>
    )
  }
}
