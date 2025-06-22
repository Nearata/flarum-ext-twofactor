<?php

namespace Nearata\TwoFactor\Support;

class CacheKeys
{
    public static function validate(string $route, int $userId): string
    {
        return "nearata-twofactor:validate:$route$userId";
    }
}
