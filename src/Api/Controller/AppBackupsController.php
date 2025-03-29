<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Exception\NotAuthenticatedException;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\JsonResponse;
use Nearata\TwoFactor\Model\TwoFactor;
use Nearata\TwoFactor\Model\TwoFactorBackupCodes;
use Nearata\TwoFactor\TotpProvider;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class AppBackupsController implements RequestHandlerInterface
{
    public function __construct(
        protected SettingsRepositoryInterface $settings,
        protected TotpProvider $totp,
        protected Hasher $hasher)
    {
        $this->settings = $settings;
        $this->totp = $totp;
        $this->hasher = $hasher;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();
        $actor->assertCan('nearata-twofactor.enable');

        $app = $actor->twoFactor()->where('type', 'app')->first();

        if (! $app->exists) {
            throw new PermissionDeniedException();
        }

        $data = $request->getParsedBody();
        $password = Arr::get($data, 'password', '');
        $passcode = Arr::get($data, 'passcode', '');

        if (! ($actor->checkPassword($password) && $this->totp->checkPasscode($actor, $passcode))) {
            throw new NotAuthenticatedException();
        }

        $codes = $this->totp->generateBackupCodes();

        if (! empty($codes)) {
            TwoFactorBackupCodes::insert(
                array_map(function (string $item) use ($actor) {
                    return [
                        'user_id' => $actor->id,
                        'type' => 'app',
                        'code' => $this->hasher->make($item)
                    ];
                }, $codes)
            );
        }

        return new JsonResponse(['codes' => $codes]);
    }
}
