<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Flarum\User\Exception\NotAuthenticatedException;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\EmptyResponse;
use Nearata\TwoFactor\TotpProvider;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class AppDeleteController implements RequestHandlerInterface
{
    public function __construct(protected TotpProvider $totp)
    {
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();
        $actor->assertCan('nearata-twofactor.enable');

        $app = $actor->twoFactor()->where('type', 'app')->first();

        if (! $app->exists) {
            return new EmptyResponse(400);
        }

        $body = $request->getParsedBody();
        $password = Arr::get($body, 'password', '');
        $passcode = Arr::get($body, 'passcode', '');

        if (! $actor->checkPassword($password)) {
            throw new NotAuthenticatedException();
        }

        if (! $this->totp->checkPasscode($actor, $passcode)) {
            throw new NotAuthenticatedException();
        }

        $app->delete();
        $actor->twoFactorBackupCodes()->where('type', 'app')->delete();

        return new EmptyResponse();
    }
}
