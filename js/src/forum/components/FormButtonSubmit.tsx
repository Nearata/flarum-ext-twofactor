import Button from "flarum/common/components/Button";
import type Mithril from "mithril"

export default class FormButtonSubmit extends Button {
  view(vnode: Mithril.Vnode<this>) {
    this.attrs.type = "submit"
    this.attrs.className = "Button Button--primary Button--block"
    return <div className="Form-group">{super.view(vnode)}</div>
  }
}
