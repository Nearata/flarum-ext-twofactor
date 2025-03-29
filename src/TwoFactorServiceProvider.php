<?php

namespace Nearata\TwoFactor;

use Flarum\Foundation\AbstractServiceProvider;
use Nearata\TwoFactor\TotpProvider;

class TwoFactorServiceProvider extends AbstractServiceProvider
{
    public function register()
    {
        $this->container->bind(TotpProvider::class);

        $this->container->tag([
            AppProvider::class
        ], 'nearata-twofactor.providers');
    }
}
