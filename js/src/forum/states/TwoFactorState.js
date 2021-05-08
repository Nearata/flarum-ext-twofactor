export default class TwoFactorState {
    constructor() {
        this.apiUrl = app.forum.attribute('apiUrl');

        this.loading = false;
        this.enabled = false;
        this.qrCode = '';
        this.secret = '';
        this.backups = [];
    }

    refresh() {
        this.loading = true;

        app.request({
            url: `${this.apiUrl}/twofactor`,
            method: 'GET'
        }).then(r => {
            this.enabled = r.enabled;
            this.qrCode = r.qrCode;
            this.secret = r.secret;

            this.loading = false;
            m.redraw();
        });
    }

    generateBackups() {
        this.loading = true;

        app.request({
            url: `${this.apiUrl}/twofactor/backups`,
            method: 'GET'
        }).then(r => {
            this.backups.push(...r.codes);

            this.loading = false;
            m.redraw();
        });
    }
}
