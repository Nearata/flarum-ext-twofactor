<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Flarum\User\Exception\NotAuthenticatedException;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Contracts\Validation\Factory as ValidationFactory;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;
use Laminas\Diactoros\Response\EmptyResponse;
use Nearata\TwoFactor\EmailProvider;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class EmailDeleteController implements RequestHandlerInterface
{
    public function __construct(
        protected ValidationFactory $validationFactory,
        protected EmailProvider $emailProvider)
    {

    }
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();

        if (! $actor->twoFactor()->where('type', 'email')->exists()) {
            throw new PermissionDeniedException();
        }

        $body = $request->getParsedBody();
        $password = Arr::get($body, 'password');
        $passcode = Arr::get($body, 'passcode');

        $validator = $this->validationFactory->make($body, [
            'password' => ['required'],
            'passcode' => ['required', 'digits:6']
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        if (! $actor->checkPassword($password)) {
            throw new NotAuthenticatedException();
        }

        if (! $this->emailProvider->check($actor, $passcode)) {
            throw new NotAuthenticatedException();
        }

        $actor->twoFactor()->where('type', 'email')->delete();

        return new EmptyResponse();
    }
}
