<?php

namespace Nearata\TwoFactor\Listeners;

class UserTwoFactorUpdatedListener
{
    public function handle(UserTwoFactorUpdatedEvent $event)
    {
        if (! $event->actor->twoFactor()->exists()) {
            $event->actor->twoFactorRecoveryCodes()->delete();
        }
    }
}
