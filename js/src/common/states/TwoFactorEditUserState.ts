import app from "flarum/common/app";

export default class TwoFactorEditUserState {
  userId: string;

  loading: boolean;
  types: any;

  constructor(userId: string) {
    this.userId = userId;

    this.loading = true;
    this.types = {};
  }

  async refresh() {
    this.loading = true;

    await app
      .request({
        url: `${app.forum.attribute("apiUrl")}/nearata/twofactor`,
        params: {
          userId: this.userId,
        },
      })
      .catch(() => {})
      .then((r: any) => {
        this.types = { ...r };
      })
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
