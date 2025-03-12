<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RememberAccessToken;
use Flarum\Http\SessionAccessToken;
use Flarum\User\Exception\NotAuthenticatedException;
use Flarum\User\UserRepository;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Illuminate\Contracts\Bus\Dispatcher as BusDispatcher;
use Illuminate\Contracts\Events\Dispatcher as EventDispatcher;
use Nearata\TwoFactor\TotpProvider;
use Nearata\TwoFactor\TwoFactorLoginInitException;

class CreateTokenController extends \Flarum\Api\Controller\CreateTokenController
{
    protected TotpProvider $totp;

    public function __construct(UserRepository $users, BusDispatcher $bus, EventDispatcher $events, TotpProvider $totp)
    {
        parent::__construct($users, $bus, $events);
        $this->totp = $totp;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $body = $request->getParsedBody();

        $identification = Arr::get($body, 'identification');
        $password = Arr::get($body, 'password');

        $user = $this->users->findByIdentification($identification);

        if (! $user || ! $user->checkPassword($password)) {
            throw new NotAuthenticatedException;
        }

        if ($user->twofa_app_active) {
            $passcode = Arr::get($body, '2FACode');

            if (is_null($passcode)) {
                throw new TwoFactorLoginInitException;
            }

            $this->totp->getTotp()->setSecret($user->twofa_app_secret);

            if (! $this->totp->verify($user, $passcode)) {
                throw new NotAuthenticatedException;
            }
        }

        if (Arr::get($body, 'remember')) {
            $token = RememberAccessToken::generate($user->id);
        } else {
            $token = SessionAccessToken::generate($user->id);
        }

        // We do a first update here to log the IP/agent of the token creator, even if the token is never used afterwards
        $token->touch($request);

        return new JsonResponse([
            'token' => $token->token,
            'userId' => $user->id
        ]);
    }
}
