import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";
import SetupState from "./SetupState";

type QRCodeResponse = {
  qrcode: string;
  secret: string;
};

export default class AppSetupState extends SetupState {
  apiUrl: string = app.forum.attribute("apiUrl");
  manually = false
  password: Stream<string> = Stream("")
  passcode: Stream<string> = Stream("")
  qrCode: string = ""
  secret: string = ""

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
}
