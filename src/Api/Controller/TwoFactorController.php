<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Flarum\User\Exception\PermissionDeniedException;
use Flarum\User\UserRepository;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class TwoFactorController implements RequestHandlerInterface
{
    /**
     * @var UserRepository
     */
    protected $users;

    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();

        $userId = Arr::get($request->getQueryParams(), 'userId');

        $user = null;
        if ($userId) {
            $actor->assertAdmin();

            $user = $this->users->findOrFail($userId);

            if ($user->id !== $actor->id && $user->isAdmin()) {
                throw new PermissionDeniedException();
            }
        }

        $target = $user ?? $actor;

        return new JsonResponse([
            'app' => $target->twofa_app_active,
        ]);
    }
}
