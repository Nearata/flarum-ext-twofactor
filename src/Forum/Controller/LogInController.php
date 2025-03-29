<?php

namespace Nearata\TwoFactor\Forum\Controller;

use Flarum\Http\AccessToken;
use Flarum\Http\RememberAccessToken;
use Flarum\User\Event\LoggedIn;
use Illuminate\Support\Arr;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class LogInController extends \Flarum\Forum\Controller\LogInController
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $body = $request->getParsedBody();
        $params = Arr::only($body, ['identification', 'password', 'remember', '2FAType', '2FACode']);

        /** @var \Illuminate\Session\Store */
        $session = $request->getAttribute('session');

        // in-case of page refresh
        if (! Arr::has($params, '2FAType')) {
            $session->forget('nearataTwoFactorValidated');
        }

        /**
         * if exists, the user already validated the data
         * ie. cloudflare turnstile and doesnt need
         * to be validated again
         *
         * @todo: still looking for better approach
         */
        if (! $session->has('nearataTwoFactorValidated')) {
            $this->validator->assertValid($body);
        }

        $response = $this->apiClient->withParentRequest($request)->withBody($params)->post('/token');

        if ($response->getStatusCode() === 200) {
            $data = json_decode($response->getBody());

            $token = AccessToken::findValid($data->token);

            $session = $request->getAttribute('session');
            $this->authenticator->logIn($session, $token);

            $this->events->dispatch(new LoggedIn($this->users->findOrFail($data->userId), $token));

            if ($token instanceof RememberAccessToken) {
                $response = $this->rememberer->remember($response, $token);
            }
        }

        return $response;
    }
}
