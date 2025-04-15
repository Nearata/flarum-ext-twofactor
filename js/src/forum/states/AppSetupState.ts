import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";
import SetupState from "./SetupState";

type QRCodeResponse = {
  qrcode: string;
  secret: string;
};

export type BackupsResponse = {
  codes: Array<string>;
};

export default class AppSetupState extends SetupState {
  apiUrl: string = app.forum.attribute("apiUrl");
  manually = false
  password: Stream<string> = Stream("")
  passcode: Stream<string> = Stream("")
  qrCode: string = ""
  secret: string = ""
  backups: Array<string> = []

  type() {
    return "app"
  }

  async generateQRCode() {
    await app
      .request<QRCodeResponse>({
        url: `${this.apiUrl}/nearata/twofactor/app`,
        method: "GET",
      })
      .then((r) => {
        this.qrCode = r.qrcode;
        this.secret = r.secret;
      });
  }

  async generateBackups() {
    await app
      .request<BackupsResponse>({
        url: `${this.apiUrl}/nearata/twofactor/app/backups`,
        method: "POST",
        body: {
          password: this.password(),
          passcode: this.passcode()
        }
      })
      .then((r) => this.backups.push(...r.codes));
  }
}
