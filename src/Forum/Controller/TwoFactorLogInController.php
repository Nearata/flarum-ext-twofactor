<?php

namespace Nearata\TwoFactor\Forum\Controller;

use Flarum\Http\AccessToken;
use Flarum\Http\RememberAccessToken;
use Flarum\Http\Rememberer;
use Flarum\Http\SessionAuthenticator;
use Flarum\User\Exception\NotAuthenticatedException;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Laminas\Diactoros\Response\JsonResponse;
use Nearata\TwoFactor\Helpers;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class TwoFactorLogInController implements RequestHandlerInterface
{
    /**
     * @var SessionAuthenticator
     */
    protected $authenticator;

    /**
     * @var Rememberer
     */
    protected $rememberer;

    public function __construct(SessionAuthenticator $authenticator, Rememberer $rememberer)
    {
        $this->authenticator = $authenticator;
        $this->rememberer = $rememberer;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $body = $request->getParsedBody();

        /**
         * @var \Illuminate\Session\Store
         */
        $session = $request->getAttribute('session');

        $accessToken = $session->get('twofactor_access_token');

        if (! $accessToken) {
            throw new NotAuthenticatedException();
        }

        /**
         * @var ?AccessToken
         */
        $token = AccessToken::query()
            ->where('token', $accessToken)
            ->first();

        if (! $token || ! $token->user) {
            throw new NotAuthenticatedException();
        }

        $user = $token->user;

        if (! $user->checkPassword(Arr::get($body, 'password'))) {
            throw new NotAuthenticatedException();
        }

        $type = Arr::get($body, '2FAType');
        $code = Arr::get($body, '2FACode');

        if (! Helpers::isValidType($type)) {
            throw new NotAuthenticatedException();
        }

        if ($type == 'app' && ! Helpers::checkAppCode($user, $code)) {
            throw new NotAuthenticatedException();
        }

        /**
         * we rename it back to its original type
         * so we dont delete it by mistake
         */
        $token->type = Str::after($token->type, 'twofactor_');
        $token->save();

        /**
         * we are going to delete all - if are any - uncompleted sessions of the user
         */
        $user->accessTokens()
            ->whereIn('type', ['twofactor_session', 'twofactor_session_remember'])
            ->delete();

        $session->forget('twofactor_access_token');

        $this->authenticator->logIn($session, $token);

        $response = new JsonResponse([
            'token' => $token->token,
            'userId' => $user->id,
        ]);

        if ($token instanceof RememberAccessToken) {
            $response = $this->rememberer->remember($response, $token);
        }

        return $response;
    }
}
