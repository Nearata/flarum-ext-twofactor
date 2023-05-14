<?php

namespace Nearata\TwoFactor\Forum\Controller;

use Flarum\Http\RequestUtil;
use Flarum\User\Exception\NotAuthenticatedException;
use Flarum\User\User;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\JsonResponse;
use Nearata\TwoFactor\Helpers;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class LogInController extends \Flarum\Forum\Controller\LogInController
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $body = $request->getParsedBody();

        $identification = Arr::get($body, 'identification');
        $password = Arr::get($body, 'password');

        $this->validator->assertValid($body);

        $user = $this->users->findByIdentification($identification);

        if (! $user || ! $user->checkPassword($password)) {
            throw new NotAuthenticatedException();
        }

        if (Helpers::has2FA($user)) {
            $response = $this->twoFactor($request, $body, $user);

            if ($response) {
                return $response;
            }
        }

        return parent::handle($request);
    }

    private function twoFactor(ServerRequestInterface $request, $body, User $user)
    {
        $type = Arr::get($body, '2FAType');
        $code = Arr::get($body, '2FACode');

        if (is_null($type) || is_null($code)) {
            $response = $this->apiClient->withParentRequest(RequestUtil::withActor($request, $user))->get('/nearata/twofactor');
            return new JsonResponse(['has2FA', 'type' => json_decode($response->getBody())], 401);
        }

        if (!Helpers::isValidType($type)) {
            throw new NotAuthenticatedException();
        }

        if ($type == 'app' && !Helpers::checkAppCode($user, $code)) {
            throw new NotAuthenticatedException();
        }
    }
}
