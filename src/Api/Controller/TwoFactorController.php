<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Flarum\User\Exception\NotAuthenticatedException;
use Flarum\User\UserRepository;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class TwoFactorController implements RequestHandlerInterface
{
    public function __construct(protected UserRepository $users)
    {
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);

        if ($actor->isGuest()) {
            $body = $request->getParsedBody();
            $identification = Arr::get($body, 'identification');
            $password = Arr::get($body, 'password');
            
            $actor = $this->users->findByIdentification($identification);

            if (is_null($actor) || ! $actor->checkPassword($password)) {
                throw new NotAuthenticatedException();
            }
        }

        return new JsonResponse($actor->twoFactor()->pluck('type')->toArray());
    }
}
