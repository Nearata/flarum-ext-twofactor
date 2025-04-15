<?php

namespace Nearata\TwoFactor;

use Flarum\Api\Controller\ShowUserController;
use Flarum\Api\Serializer\CurrentUserSerializer;
use Flarum\Extend;
use Flarum\User\User;
use Nearata\TwoFactor\Api\Controller\AppBackupsController;
use Nearata\TwoFactor\Api\Controller\AppCreateController;
use Nearata\TwoFactor\Api\Controller\AppDeleteController;
use Nearata\TwoFactor\Api\Controller\AppInitController;
use Nearata\TwoFactor\Api\Controller\CreateTokenController;
use Nearata\TwoFactor\Api\Controller\EmailCreateController;
use Nearata\TwoFactor\Api\Controller\EmailDeleteController;
use Nearata\TwoFactor\Api\Controller\EmailSendCodeController;
use Nearata\TwoFactor\Api\Controller\TwoFactorController;
use Nearata\TwoFactor\Api\Serializer\TwoFactorSerializer;
use Nearata\TwoFactor\Forum\Controller\LogInController;
use Nearata\TwoFactor\Model\TwoFactor;
use Nearata\TwoFactor\Model\TwoFactorBackupCodes;
use Nearata\TwoFactor\TwoFactorServiceProvider;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Routes('api'))
        ->remove('token')
        ->post('/token', 'token', CreateTokenController::class)
        ->post('/nearata/twofactor', 'nearata-twofactor.index', TwoFactorController::class)
        ->get('/nearata/twofactor/app', 'nearata-twofactor.app.init', AppInitController::class)
        ->post('/nearata/twofactor/app', 'nearata-twofactor.app.create', AppCreateController::class)
        ->delete('/nearata/twofactor/app', 'nearata-twofactor.app.delete', AppDeleteController::class)
        ->post('/nearata/twofactor/app/backups', 'nearata-twofactor.app.backups', AppBackupsController::class)
        ->post('/nearata/twofactor/email', 'nearata-twofactor.email-create', EmailCreateController::class)
        ->delete('/nearata/twofactor/email', 'nearata-twofactor.email-delete', EmailDeleteController::class)
        ->post('/nearata/twofactor/email/sendCode', 'nearata-twofactor.email-sendcode', EmailSendCodeController::class),

    (new Extend\Routes('forum'))
        ->remove('login')
        ->post('/login', 'login', LogInController::class),

    (new Extend\Settings())
        ->default('nearata-twofactor.appNumberOfGeneratedBackupCodes', 5)
        ->default('nearata-twofactor.emailCodeExpireTimeMinutes', 2),

    (new Extend\ApiSerializer(CurrentUserSerializer::class))
        ->hasMany('twoFactor', TwoFactorSerializer::class),

    (new Extend\ApiController(ShowUserController::class))
        ->addInclude('twoFactor'),

    (new Extend\Model(User::class))
        ->hasMany('twoFactor', TwoFactor::class, 'user_id')
        ->hasMany('twoFactorBackupCodes', TwoFactorBackupCodes::class, 'user_id'),

    (new Extend\ServiceProvider)
        ->register(TwoFactorServiceProvider::class),

    (new Extend\ErrorHandling)
        ->status('twofactor_login_init', 401),

    (new Extend\View)
        ->namespace('nearata-twofactor', __DIR__.'/views')

    //(new Extend\Notification)
        //->type(EmailCodeNotificationBlueprint::class, BasicUserSerializer::class, ['email'])
];
