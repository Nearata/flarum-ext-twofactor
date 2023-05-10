import app from "flarum/forum/app";

type RefreshResponse = {
  enabled: boolean;
  qrCode: string;
  secret: string;
};

type GenerateResponse = {
  codes: Array<string>;
};

export default class AppState {
  apiUrl: string = app.forum.attribute("apiUrl");

  loading: boolean;
  enabled: boolean;
  qrCode: string;
  secret: string;
  backups: Array<string>;

  constructor() {
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
      })
      .finally(() => {
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
      })
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
