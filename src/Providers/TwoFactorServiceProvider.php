<?php

namespace Nearata\TwoFactor\Providers;

use Flarum\Foundation\AbstractServiceProvider;
use Nearata\TwoFactor\AppProvider;
use Nearata\TwoFactor\EmailProvider;
use Nearata\TwoFactor\RecoveryCodesProvider;

class TwoFactorServiceProvider extends AbstractServiceProvider
{
    public function register()
    {
        $this->container->bind(AppProvider::class);
        $this->container->bind(EmailProvider::class);
        $this->container->bind(RecoveryCodesProvider::class);

        $this->container->tag([
            AppProvider::class,
            EmailProvider::class,
            RecoveryCodesProvider::class,
        ], 'nearata-twofactor.providers');
    }
}
