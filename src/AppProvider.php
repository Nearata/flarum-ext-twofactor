<?php

namespace Nearata\TwoFactor;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Nearata\TwoFactor\Contracts\AbstractProvider;
use OTPHP\TOTP;

class AppProvider implements AbstractProvider
{
    private TOTP $totp;

    public function __construct(protected SettingsRepositoryInterface $settings)
    {
        $this->totp = TOTP::create();
    }

    public function check(User $user, string $passcode): bool
    {
        $secret = $user->twoFactor()->where('type', 'app')->value('secret');

        if (! is_null($secret)) {
            $this->totp->setSecret($secret);
        }

        return $this->totp->verify($passcode);
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
}
