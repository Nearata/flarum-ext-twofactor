<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Flarum\User\Exception\NotAuthenticatedException;
use Flarum\User\Exception\PermissionDeniedException;
use Flarum\User\User;
use Flarum\User\UserRepository;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\EmptyResponse;
use Nearata\TwoFactor\Helpers;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class AppUpdateController implements RequestHandlerInterface
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

        $data = $request->getParsedBody();

        if ($response = $this->adminDisabling($actor, $data)) {
            return $response;
        }

        if (! $actor->checkPassword(Arr::get($data, 'password', ''))) {
            throw new NotAuthenticatedException();
        }

        $code = Arr::get($data, 'code');

        if (is_null($code)) {
            throw new NotAuthenticatedException();
        }

        $secret = Arr::get($data, 'secret');

        if (! $actor->twofa_app_active && is_null($secret)) {
            throw new NotAuthenticatedException();
        }

        if ($actor->twofa_app_active) {
            $this->disabling($actor, $code);
        } else {
            $this->enabling($actor, $code, $secret);
        }

        $actor->save();

        return new EmptyResponse();
    }

    private function enabling(User $actor, string $code, string $secret)
    {
        $actor->assertCan('nearata-twofactor.enable');

        if (! Helpers::checkAppCode($actor, $code, $secret)) {
            throw new NotAuthenticatedException();
        }

        $actor->twofa_app_active = true;
        $actor->twofa_app_secret = $secret;
    }

    private function disabling(User $actor, $code)
    {
        if (! Helpers::checkAppCode($actor, $code)) {
            throw new NotAuthenticatedException();
        }

        $actor->twofa_app_active = false;
        $actor->twofa_app_secret = '';
        $actor->twofa_app_codes = [];
    }

    private function adminDisabling(User $actor, $data)
    {
        $userId = Arr::get($data, 'userId');

        if (! $userId) {
            return;
        }

        $actor->assertAdmin();

        $user = $this->users->findOrFail($userId);

        if (! $user->twofa_app_active) {
            throw new PermissionDeniedException();
        }

        if ($user->id !== $actor->id && $user->isAdmin()) {
            throw new PermissionDeniedException();
        }

        $user->twofa_app_active = false;
        $user->twofa_app_secret = '';
        $user->twofa_app_codes = [];
        $user->save();

        return new EmptyResponse();
    }
}
