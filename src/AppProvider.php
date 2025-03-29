<?php

namespace Nearata\TwoFactor;

use Flarum\User\User;

class AppProvider implements AbstractProvider
{
    public function __construct(protected TotpProvider $totp)
    {
    }

    public function type(): string
    {
        return 'app';
    }

    public function check(User $user, string $passcode): bool
    {
        return $this->totp->checkPasscode($user, $passcode);
    }
}
