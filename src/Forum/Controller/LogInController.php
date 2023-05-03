<?php

namespace Nearata\TwoFactor\Forum\Controller;

use Flarum\Http\AccessToken;
use Flarum\Http\RememberAccessToken;
use Flarum\User\Event\LoggedIn;
use Flarum\User\User;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\EmptyResponse;
use Laminas\Diactoros\Response\JsonResponse;
use Nearata\TwoFactor\Helpers;
use OTPHP\TOTP;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class LogInController extends \Flarum\Forum\Controller\LogInController
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $body = $request->getParsedBody();
        $params = Arr::only($body, ['identification', 'password', 'remember']);

        $this->validator->assertValid($body);

        $response = $this->apiClient->withParentRequest($request)->withBody($params)->post('/token');

        if ($response->getStatusCode() === 200) {
            $data = json_decode($response->getBody());

            // start-twofa
            $user = $this->users->findOrFail($data->userId);
            if ($user->twofa_active && $twoFactorResponse = $this->twoFactor($body, $user)) {
                return $twoFactorResponse;
            }
            // end-twofa

            $token = AccessToken::findValid($data->token);

            $session = $request->getAttribute('session');
            $this->authenticator->logIn($session, $token);

            $this->events->dispatch(new LoggedIn($user, $token));

            if ($token instanceof RememberAccessToken) {
                $response = $this->rememberer->remember($response, $token);
            }
        }

        return $response;
    }

    private function twoFactor($body, User $user)
    {
        $code = Arr::get($body, 'twofa');

        if (is_null($code)) {
            return new JsonResponse(['has2FA' => true], 401);
        }

        $otp = TOTP::create($user->twofa_secret);

        if (!($otp->verify($code) || Helpers::isBackupCode($user, $code))) {
            return new EmptyResponse(401);
        }
    }
}
