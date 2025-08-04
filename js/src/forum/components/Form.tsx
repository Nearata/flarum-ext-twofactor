import Component from "flarum/common/Component";
import type Mithril from "mithril";

type Attrs = {
  disabled: boolean;
};

export default class Form extends Component<Attrs> {
  view(vnode: Mithril.Vnode<this>) {
    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <fieldset disabled={this.attrs.disabled}>{vnode.children}</fieldset>
        </div>
      </div>
    );
  }
}
