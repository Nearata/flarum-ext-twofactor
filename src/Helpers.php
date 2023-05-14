<?php

namespace Nearata\TwoFactor;

use Flarum\User\User;
use OTPHP\TOTP;

class Helpers
{
    public static function checkAppCode(User $actor, string $code, string $secret = null): bool
    {
        $totp = TOTP::create($secret ?? $actor->twofa_app_secret);

        if ($totp->verify($code)) {
            return true;
        }

        $backups = $actor->twofa_app_codes;

        if (is_null($backups)) {
            return false;
        }

        if (count($backups) === 0) {
            return false;
        }

        $firstCode = array_shift($backups);

        if ($code !== $firstCode) {
            return false;
        }

        $actor->twofa_app_codes = $backups;
        $actor->save();

        return true;
    }

    public static function has2FA(User $actor): bool
    {
        return $actor->twofa_app_active;
    }

    public static function isValidType(string $type): bool
    {
        return in_array($type, ['app']);
    }
}
