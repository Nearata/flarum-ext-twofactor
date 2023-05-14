<?php

namespace Nearata\TwoFactor\Api\Serializer;

use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\User\User;

class BasicUserSerializerAttributes
{
    public function __invoke(BasicUserSerializer $serializer, User $actor, array $attributes)
    {
        return [
            'nearataTwoFactorCanEnable' => $actor->can('nearata-twofactor.enable'),
            'nearataTwoFactorAppEnabled' => $actor->twofa_app_active
        ];
    }
}
