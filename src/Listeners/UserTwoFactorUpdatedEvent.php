<?php

namespace Nearata\TwoFactor\Listeners;

use Flarum\User\User;

class UserTwoFactorUpdatedEvent
{
    public function __construct(public User $actor)
    {
    }
}
