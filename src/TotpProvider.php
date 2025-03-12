<?php

namespace Nearata\TwoFactor;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use OTPHP\TOTP;

class TotpProvider
{
    private TOTP $totp;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->totp = TOTP::create();
        $this->totp->setIssuer($settings->get('forum_title'));
    }

    public function getTotp(): TOTP
    {
        return $this->totp;
    }

    public function verify(User $actor, string $passcode)
    {
        return $this->totp->verify($passcode) || $this->verifyBackupCode($actor, $passcode);
    }

    private function verifyBackupCode(User $actor, string $passcode): bool
    {
        $backups = $actor->twofa_app_codes;

        if (is_null($backups)) {
            return false;
        }

        if (count($backups) === 0) {
            return false;
        }

        $firstCode = array_shift($backups);

        if ($passcode !== $firstCode) {
            return false;
        }

        $actor->twofa_app_codes = $backups;
        $actor->save();

        return true;
    }
}
