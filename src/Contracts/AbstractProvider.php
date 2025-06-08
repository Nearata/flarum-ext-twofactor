<?php

namespace Nearata\TwoFactor\Contracts;

use Flarum\User\User;

interface AbstractProvider
{
    public function check(User $user, string $passcode): bool;
}
