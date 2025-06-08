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
use Illuminate\Contracts\Validation\Factory as ValidationFactory;
use Illuminate\Validation\ValidationException;
use Nearata\TwoFactor\Rules\PasscodeRule;
use Nearata\TwoFactor\Exceptions\TwoFactorLoginInitException;

class CreateTokenController extends \Flarum\Api\Controller\CreateTokenController
{
    public function __construct(
        UserRepository $users,
        BusDispatcher $bus,
        EventDispatcher $events,
        protected ValidationFactory $validationFactory)
    {
        parent::__construct($users, $bus, $events);
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

        if ($user->twoFactor()->exists()) {
            /** @var \Illuminate\Session\Store */
            $session = $request->getAttribute('session');

            $twofaCode = Arr::get($body, '2FACode');

            if (is_null($twofaCode)) {
                $session->put('nearataTwoFactorValidated', 1);
                throw new TwoFactorLoginInitException();
            }

            $validator = $this->validationFactory->make(['2FACode' => $twofaCode], [
                '2FACode' => ['required', new PasscodeRule($user)]
            ]);

            if ($validator->fails()) {
                throw new ValidationException($validator);
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
}
