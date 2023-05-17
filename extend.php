<?php

namespace Nearata\TwoFactor;

use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Extend;
use Flarum\User\User;
use Nearata\TwoFactor\Api\Controller\AppBackupsController;
use Nearata\TwoFactor\Api\Controller\AppQRCodeController;
use Nearata\TwoFactor\Api\Controller\AppUpdateController;
use Nearata\TwoFactor\Api\Controller\TwoFactorController;
use Nearata\TwoFactor\Api\Serializer\BasicUserSerializerAttributes;
use Nearata\TwoFactor\Forum\Controller\LogInController;
use Nearata\TwoFactor\Forum\Controller\TwoFactorLogInController;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Routes('api'))
        ->get('/nearata/twofactor', 'nearata-twofactor.index', TwoFactorController::class)
        ->patch('/nearata/twofactor/app', 'nearata-twofactor.app.update', AppUpdateController::class)
        ->get('/nearata/twofactor/app/qrcode', 'nearata-twofactor.app.qrcode', AppQRCodeController::class)
        ->get('/nearata/twofactor/app/backups', 'nearata-twofactor.app.backups', AppBackupsController::class),

    (new Extend\Routes('forum'))
        ->remove('login')
        ->post('/login', 'login', LogInController::class)
        ->post('/nearata/twofactor/login', 'nearata-twofactor.login', TwoFactorLogInController::class),

    (new Extend\Settings())
        ->default('nearata-twofactor.admin.generate_backups', false)
        ->serializeToForum('canGenerateBackups', 'nearata-twofactor.admin.generate_backups', 'boolval'),

    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->attributes(BasicUserSerializerAttributes::class),

    (new Extend\Model(User::class))
        ->cast('twofa_app_secret', 'string')
        ->cast('twofa_app_active', 'boolean')
        ->cast('twofa_app_codes', 'array'),

    (new Extend\Csrf)
        ->exemptRoute('nearata-twofactor.login')
];
