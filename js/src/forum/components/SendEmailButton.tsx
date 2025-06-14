import { forumTranslator as trans } from "../helpers/trans";
import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import app from "flarum/forum/app";
import type Mithril from "mithril";

type Attrs = {
  body: Record<string, any>;
};

export default class SendEmailButton extends Component<Attrs> {
  loading = false;

  view(_: Mithril.Vnode<this>) {
    return (
      <Button
        className="Button Button--block"
        onclick={this.sendEmail.bind(this)}
        loading={this.loading}
        disabled={this.loading}
      >
        {trans("email_sendemail_button_label")}
      </Button>
    );
  }

  sendEmail() {
    this.loading = true;
    app
      .request<void>({
        url: `${app.forum.attribute(
          "apiUrl"
        )}/nearata/twofactor/email/sendCode`,
        method: "POST",
        body: this.attrs.body,
      })
      .then(() =>
        app.alerts.show({ type: "success" }, trans("email_code_sent"))
      )
      .finally(() => (this.loading = false));
  }
}
