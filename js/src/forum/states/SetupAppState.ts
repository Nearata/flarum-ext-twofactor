import app from "flarum/forum/app";

type QRCodeResponse = {
  qrcode: string;
  secret: string;
};

type BackupsResponse = {
  codes: Array<string>;
};

export default class SetupAppState {
  apiUrl: string = app.forum.attribute("apiUrl");

  loading: boolean;
  qrCode: string;
  secret: string;
  backups: Array<string>;

  constructor() {
    this.loading = false;
    this.qrCode = "";
    this.secret = "";
    this.backups = [];
  }

  get enabled(): boolean {
    return app.session.user!.attribute<boolean>("nearataTwoFactorAppEnabled");
  }

  async refresh() {
    this.loading = true;

    await app.store.find("users", app.session.user!.id()!);

    this.loading = false;
    m.redraw();
  }

  async generateQRCode() {
    this.loading = true;

    await app
      .request<any>({
        url: `${this.apiUrl}/nearata/twofactor/app/qrcode`,
        method: "GET",
      })
      .then((r: QRCodeResponse) => {
        this.qrCode = r.qrcode;
        this.secret = r.secret;
      })
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }

  async generateBackups() {
    this.loading = true;

    await app
      .request<any>({
        url: `${this.apiUrl}/nearata/twofactor/app/backups`,
        method: "GET",
      })
      .then((r: BackupsResponse) => {
        this.backups.push(...r.codes);
      })
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
