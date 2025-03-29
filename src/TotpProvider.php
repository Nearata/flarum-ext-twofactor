<?php

namespace Nearata\TwoFactor;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Illuminate\Contracts\Hashing\Hasher;
use OTPHP\TOTP;

class TotpProvider
{
    private TOTP $totp;

    public function __construct(protected SettingsRepositoryInterface $settings, protected Hasher $hasher)
    {
        $this->totp = TOTP::create();
    }

    public function withSecret(string $secret): self
    {
        $this->totp->setSecret($secret);
        return $this;
    }

    public function getSecret(): string
    {
        return $this->totp->getSecret();
    }

    public function getQrcode(User $actor): string
    {
        $this->totp->setIssuer($this->settings->get('forum_title'));
        $this->totp->setLabel($actor->username);
        return $this->totp->getProvisioningUri();
    }

    public function checkPasscode(User $actor, string $passcode): bool
    {
        $secret = $actor->twoFactor()->where('type', 'app')->first()->secret;

        if (! is_null($secret)) {
            $this->totp->setSecret($secret);
        }

        return $this->totp->verify($passcode) || $this->verifyBackupCode($actor, $passcode);
    }

    public function generateBackupCodes(): array
    {
        $codes = [];
        $max = $this->settings->get('nearata-twofactor.appNumberOfGeneratedBackupCodes');

        for ($i = 0; $i < $max; $i++) {
            $bytes = random_bytes(4);
            $hex = bin2hex($bytes);

            array_push($codes, $hex);
        }

        return $codes;
    }

    private function verifyBackupCode(User $actor, string $passcode): bool
    {
        $model = $actor->twoFactorBackupCodes()->where('type', 'app')->first();
        $valid = $this->hasher->check($passcode, $model->code);

        if ($valid) {
            $model->delete();
        }

        return $valid;
    }
}
