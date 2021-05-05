<?php

namespace Nearata\TwoFactor;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Routes('api'))
        ->get('/twofactor', 'twofactor.index', Api\Controller\TwoFactorController::class)
        ->patch('/twofactor', 'twofactor.update', Api\Controller\TwoFactorUpdateController::class),

    (new Extend\Routes('forum'))
        ->remove('POST', 'login')
        ->post('/login', 'login', Forum\Controller\CustomLogInController::class)
];
