<?php

namespace Nearata\TwoFactor;

use Carbon\Carbon;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Illuminate\Contracts\Cache\Repository as CacheRepository;
use Nearata\TwoFactor\Contracts\AbstractProvider;

class EmailProvider implements AbstractProvider
{
    public function __construct(
        protected CacheRepository $cache,
        protected SettingsRepositoryInterface $settings)
    {
    }

    public function check(User $user, string $passcode): bool
    {
        $key = $this->key($user);
        $cached = $this->cache->get($key, 0);
        $valid = $passcode === strval($cached);

        if ($valid) {
            $this->cache->forget($key);
        }

        return $valid;
    }

    public function generatePasscode(User $user): string
    {
        $minutes = (int) $this->settings->get('nearata-twofactor.emailCodeExpireTimeMinutes');
        $passcode = random_int(100000, 999999);
        $this->cache->put($this->key($user), $passcode, Carbon::now()->addMinutes($minutes));
        return $passcode;
    }

    private function key(User $user): string
    {
        return 'nearataTwoFactorEmailCode_'.$user->id;
    }
}
