import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";

type QRCodeResponse = {
  qrcode: string;
  secret: string;
};

export interface BackupsResponse {
  codes: Array<string>;
};

export default class AppSetupState {
  apiUrl: string = app.forum.attribute("apiUrl");
  loading = false
  success = false
  manually = false
  password: Stream<string> = Stream("")
  passcode: Stream<string> = Stream("")
  qrCode: string = ""
  secret: string = ""
  backups: Array<string> = []

  get enabled() {
    // return !! app.store.getBy<TwoFactor>("twoFactor", "type", "app")
    return !! app.session.user!.twoFactor().filter(i => i.attribute("type") === "app").length
  }

  async refresh() {
    this.loading = true
    await app.store.find("users", app.session.user!.id()!).finally(() => {
      this.loading = false
      m.redraw()
    });
  }

  async generateQRCode() {
    await app
      .request<any>({
        url: `${this.apiUrl}/nearata/twofactor/app`,
        method: "GET",
      })
      .then((r: QRCodeResponse) => {
        this.qrCode = r.qrcode;
        this.secret = r.secret;
      });
  }

  async generateBackups() {
    await app
      .request<any>({
        url: `${this.apiUrl}/nearata/twofactor/app/backups`,
        method: "POST",
        body: {
          password: this.password(),
          passcode: this.passcode()
        }
      })
      .then((r: BackupsResponse) => {
        this.backups.push(...r.codes);
      });
  }
}
