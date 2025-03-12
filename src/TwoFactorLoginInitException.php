<?php

namespace Nearata\TwoFactor;

use Exception;
use Flarum\Foundation\KnownError;

class TwoFactorLoginInitException extends Exception implements KnownError
{
    public function getType(): string
    {
        return 'twofactor_login_init';
    }
}
