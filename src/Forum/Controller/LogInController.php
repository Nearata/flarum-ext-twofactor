<?php

namespace Nearata\TwoFactor\Forum\Controller;

use Flarum\Http\AccessToken;
use Flarum\Http\RequestUtil;
use Flarum\User\Exception\NotAuthenticatedException;
use Laminas\Diactoros\Response\JsonResponse;
use Nearata\TwoFactor\Helpers;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class LogInController extends \Flarum\Forum\Controller\LogInController
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $response = parent::handle($request);

        if ($response->getStatusCode() !== 200) {
            return $response;
        }

        $data = json_decode($response->getBody());

        $user = $this->users->findOrFail($data->userId);

        if (! Helpers::has2FA($user)) {
            return $response;
        }

        /**
         * @var \Illuminate\Session\Store
         */
        $session = $request->getAttribute('session');

        $accessToken = $session->pull('access_token');

        /**
         * @var ?AccessToken
         */
        $token = AccessToken::findValid($accessToken);

        if (! $token) {
            throw new NotAuthenticatedException();
        }

        $token->type = "twofactor_$token->type";
        $token->save();

        /**
         * we have to rename it, otherwise its lost
         */
        $session->put('twofactor_access_token', $accessToken);

        $response = $this->apiClient->withParentRequest(RequestUtil::withActor($request, $user))->get('/nearata/twofactor');

        $payload = [
            'has2FA',
            'type' => json_decode($response->getBody()),
        ];

        return new JsonResponse($payload, 401);
    }
}
