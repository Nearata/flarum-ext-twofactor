<?php

namespace Nearata\TwoFactor\Api\Serializer;

use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\User\User;

class BasicUserSerializerAttributes
{
    public function __invoke(BasicUserSerializer $serializer, User $user, array $attributes)
    {
        return [
            'nearataTwoFactorCanEnable' => $user->can('nearata-twofactor.enable')
        ];
    }
}
