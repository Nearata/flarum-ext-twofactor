<?php

namespace Nearata\TwoFactor;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Illuminate\Contracts\Hashing\Hasher;
use Nearata\TwoFactor\Contracts\AbstractProvider;

class RecoveryCodesProvider implements AbstractProvider
{
    public function __construct(
        protected SettingsRepositoryInterface $settings,
        protected Hasher $hasher) {}

    public function check(User $user, string $passcode): bool
    {
        $model = $user->twoFactorRecoveryCodes()->first();

        return $this->hasher->check($passcode, $model->code);
    }

    public function generateCodes(): array
    {
        $codes = [];
        $max = $this->settings->get('nearata-twofactor.recoveryCodesGeneratedNumber');

        for ($i = 0; $i < $max; $i++) {
            $bytes = random_bytes(4);
            $hex = bin2hex($bytes);

            array_push($codes, $hex);
        }

        return $codes;
    }
}
