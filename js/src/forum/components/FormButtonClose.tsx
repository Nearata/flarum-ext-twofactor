import { forumTranslator as trans } from "../helpers/trans";
import Button from "flarum/common/components/Button";
import type Mithril from "mithril";

export default class FormButtonClose extends Button {
  view(vnode: Mithril.Vnode<this>) {
    this.attrs.className = "Button Button--block";
    vnode.children = trans("settings.modal_close_button_label");
    return <div className="Form-group">{super.view(vnode)}</div>;
  }
}
