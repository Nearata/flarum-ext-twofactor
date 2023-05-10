import SetupAppModal from "./SetupAppModal";
import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import FieldSet from "flarum/common/components/FieldSet";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class TwoFactorItems extends Component {
  view(vnode: Mithril.Vnode<this>) {
    return (
      <FieldSet
        className="Settings-nearataTwoFactor"
        label={app.translator.trans(
          "nearata-twofactor.forum.settings.section_title"
        )}
      >
        <div class="AuthenticationApp">
          <div class="helpText">
            {app.translator.trans(
              "nearata-twofactor.forum.settings.app.button_help"
            )}
          </div>
          <Button class="Button" onclick={() => app.modal.show(SetupAppModal)}>
            {app.translator.trans(
              "nearata-twofactor.forum.settings.app.button_label"
            )}
          </Button>
        </div>
      </FieldSet>
    );
  }
}
