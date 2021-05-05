import { extend } from 'flarum/common/extend';
import Button from 'flarum/common/components/Button';
import LogInModal from 'flarum/forum/components/LogInModal';
import SettingsPage from 'flarum/forum/components/SettingsPage';

import TwoFactorLogInModal from './components/TwoFactorLogInModal';
import TwoFactorSetupModal from './components/TwoFactorSetupModal';
import TwoFactorState from './states/TwoFactorState';


app.initializers.add('nearata-twofactor', () => {
    extend(SettingsPage.prototype, 'oninit', function () {
        this.twoFactor = new TwoFactorState();
    });

    extend(SettingsPage.prototype, 'accountItems', function (items) {
        items.add(
            'nearataTwoFactor',
            m(Button, {
                class: 'Button',
                onclick: () => app.modal.show(TwoFactorSetupModal, { twoFactorState: this.twoFactor })
            }, 'Two Factor')
        );
    });

    extend(LogInModal.prototype, 'onerror', function (original, error) {
        const response = error.response;
        if (response && 'has2FA' in response && response.has2FA) {
            app.modal.show(TwoFactorLogInModal, {
                identification: this.identification(),
                password: this.password(),
                remember: this.remember()
            });
        }
    });
});
