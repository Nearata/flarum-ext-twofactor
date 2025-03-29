<?php

namespace Nearata\TwoFactor;

use Flarum\User\User;

interface AbstractProvider
{
    public function type(): string;

    public function check(User $user, string $passcode): bool;
}
