<?php

namespace Nearata\TwoFactor;

use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Extend;
use Nearata\TwoFactor\Api\Controller\TwoFactorBackupsController;
use Nearata\TwoFactor\Api\Controller\TwoFactorController;
use Nearata\TwoFactor\Api\Controller\TwoFactorUpdateController;
use Nearata\TwoFactor\Api\Serializer\ExtendBasicUserSerializer;
use Nearata\TwoFactor\Forum\Controller\CustomLogInController;
use Nearata\TwoFactor\Http\Middleware\AuthenticateWithTwoFactor;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Routes('api'))
        ->get('/twofactor', 'twofactor.index', TwoFactorController::class)
        ->patch('/twofactor', 'twofactor.update', TwoFactorUpdateController::class)
        ->get('/twofactor/backups', 'twofactor.backups', TwoFactorBackupsController::class),

    (new Extend\Routes('forum'))
        ->remove('login')
        ->post('/login', 'login', CustomLogInController::class),

    (new Extend\Settings())
        ->serializeToForum('canGenerateBackups', 'nearata-twofactor.admin.generate_backups', 'boolval'),

    (new Extend\Middleware('api'))
        ->add(AuthenticateWithTwoFactor::class),

    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->attributes(ExtendBasicUserSerializer::class)
];
