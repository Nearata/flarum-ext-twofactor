<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Api\Client;
use Flarum\Http\RememberAccessToken;
use Flarum\Http\SessionAccessToken;
use Flarum\User\Exception\NotAuthenticatedException;
use Flarum\User\User;
use Flarum\User\UserRepository;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Illuminate\Contracts\Bus\Dispatcher as BusDispatcher;
use Illuminate\Contracts\Events\Dispatcher as EventDispatcher;
use Nearata\TwoFactor\TwoFactorLoginInitException;

class CreateTokenController extends \Flarum\Api\Controller\CreateTokenController
{
    protected Client $apiClient;

    public function __construct(UserRepository $users, BusDispatcher $bus, EventDispatcher $events, Client $apiClient)
    {
        parent::__construct($users, $bus, $events);
        $this->apiClient = $apiClient;
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

        $response = $this->apiClient->withParentRequest($request)->withActor($user)->post('/nearata/twofactor');
        $responseBody = json_decode($response->getBody());

        if (count($responseBody) > 0) {
            /** @var \Illuminate\Session\Store */
            $session = $request->getAttribute('session');

            $twofaType = Arr::get($body, '2FAType');
            $twofaCode = Arr::get($body, '2FACode');

            if (is_null($twofaType)) {
                $session->put('nearataTwoFactorValidated', 1);
                throw new TwoFactorLoginInitException();
            }

            if (! $this->processProvider($twofaType, $user, $twofaCode)) {
                throw new NotAuthenticatedException;
            }

            $session->forget('nearataTwoFactorValidated');
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

    private function processProvider(string $type, User $user, string $passcode): bool
    {
        $providers = resolve('container')->tagged('nearata-twofactor.providers');
        $valid = false;

        foreach ($providers as $i) {
            if ($i->type() === $type) {
                $valid = $i->check($user, $passcode);
                break;
            }
        }

        return $valid;
    }
}
