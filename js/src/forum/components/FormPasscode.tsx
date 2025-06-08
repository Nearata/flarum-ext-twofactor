import Component from "flarum/common/Component";
import type Mithril from "mithril"
import { forumTranslator as trans } from "../helpers/trans";

export default class FormPasscode extends Component {
  view(vnode: Mithril.Vnode<this>) {
    const label = trans("form_passcode_placeholder")
    return (
      <div className="Form-group">
        <input
          className="FormControl"
          type="text"
          name="passcode"
          placeholder={label}
          aria-label={label}
          autocomplete="off"
          {...vnode.attrs}
        />
      </div>
    )
  }
}
