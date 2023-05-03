import app from "flarum/forum/app";

type RefreshResponse = {
  enabled: boolean;
  qrCode: string;
  secret: string;
};

type GenerateResponse = {
  codes: Array<string>;
};

export default class TwoFactorState {
  apiUrl: string;
  loading: boolean;
  enabled: boolean;
  qrCode: string;
  secret: string;
  backups: Array<string>;

  constructor() {
    this.apiUrl = app.forum.attribute("apiUrl");

    this.loading = false;
    this.enabled = false;
    this.qrCode = "";
    this.secret = "";
    this.backups = [];
  }

  refresh() {
    this.loading = true;

    app
      .request<any>({
        url: `${this.apiUrl}/twofactor`,
        method: "GET",
      })
      .then((r: RefreshResponse) => {
        this.enabled = r.enabled;
        this.qrCode = r.qrCode;
        this.secret = r.secret;

        this.loading = false;

        m.redraw();
      });
  }

  generateBackups() {
    this.loading = true;

    app
      .request<any>({
        url: `${this.apiUrl}/twofactor/backups`,
        method: "GET",
      })
      .then((r: GenerateResponse) => {
        this.backups.push(...r.codes);

        this.loading = false;

        m.redraw();
      });
  }
}
