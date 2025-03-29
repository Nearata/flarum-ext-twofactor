<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Api\Client;
use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Exception\NotAuthenticatedException;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\EmptyResponse;
use Nearata\TwoFactor\Model\TwoFactor;
use Nearata\TwoFactor\TotpProvider;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class AppCreateController implements RequestHandlerInterface
{
    public function __construct(
        protected TotpProvider $totp,
        protected SettingsRepositoryInterface $settings,
        protected Client $apiClient)
    {
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();
        $actor->assertCan('nearata-twofactor.enable');

        if ($actor->twoFactor()->where('type', 'app')->exists()) {
            return new EmptyResponse(400);
        }

        $body = $request->getParsedBody();
        $password = Arr::get($body, 'password', '');
        $secret = Arr::get($body, 'secret', '');
        $passcode = Arr::get($body, 'passcode', '');

        if (! $actor->checkPassword($password)) {
            throw new NotAuthenticatedException();
        }

        if (! $this->totp->withSecret($secret)->checkPasscode($actor, $passcode)) {
            throw new NotAuthenticatedException();
        }

        TwoFactor::insert([
            'user_id' => $actor->id,
            'type' => 'app',
            'secret' => $secret
        ]);

        $response = $this->apiClient
            ->withParentRequest($request)
            ->withBody(Arr::only($body, ['password', 'passcode']))
            ->post('/nearata/twofactor/app/backups');

        return $response;
    }
}
