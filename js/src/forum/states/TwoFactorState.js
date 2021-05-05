export default class TwoFactorState {
    constructor() {
        this.loading = false;
        this.enabled = false;
        this.qrCode = '';
        this.secret = '';
    }

    refresh() {
        this.loading = true;

        app.request({
            url: `${app.forum.attribute('apiUrl')}/twofactor`,
            method: 'GET'
        }).then(r => {
            this.enabled = r.enabled;
            this.qrCode = r.qrCode;
            this.secret = r.secret;

            this.loading = false;
            m.redraw();
        });
    }
}
