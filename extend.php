<?php

namespace Nearata\TwoFactor;

use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Extend;
use Nearata\TwoFactor\Api\Controller\TwoFactorBackupsController;
use Nearata\TwoFactor\Api\Controller\TwoFactorController;
use Nearata\TwoFactor\Api\Controller\TwoFactorUpdateController;
use Nearata\TwoFactor\Api\Serializer\BasicUserSerializerAttributes;
use Nearata\TwoFactor\Forum\Controller\LogInController;
use Nearata\TwoFactor\Http\Middleware\AuthenticateWithTwoFactor;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Routes('api'))
        ->get('/twofactor', 'twofactor.index', TwoFactorController::class)
        ->patch('/twofactor', 'twofactor.update', TwoFactorUpdateController::class)
        ->get('/twofactor/backups', 'twofactor.backups', TwoFactorBackupsController::class),

    (new Extend\Routes('forum'))
        ->remove('login')
        ->post('/login', 'login', LogInController::class),

    (new Extend\Settings())
        ->default('nearata-twofactor.admin.generate_backups', false)
        ->serializeToForum('canGenerateBackups', 'nearata-twofactor.admin.generate_backups', 'boolval'),

    (new Extend\Middleware('api'))
        ->add(AuthenticateWithTwoFactor::class),

    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->attributes(BasicUserSerializerAttributes::class)
];
