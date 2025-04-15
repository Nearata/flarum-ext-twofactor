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
use Nearata\TwoFactor\Model\TwoFactor;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class EmailCreateController implements RequestHandlerInterface
{
    public function __construct(
        protected EmailProvider $emailProvider,
        protected ValidationFactory $validationFactory)
    {
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();
        $actor->assertCan('nearata-twofactor.enable');

        if ($actor->twoFactor()->where('type', 'email')->exists()) {
            throw new PermissionDeniedException();
        }

        $body = $request->getParsedBody();
        $email = Arr::get($body, 'email');
        $password = Arr::get($body, 'password');
        $passcode = Arr::get($body, 'passcode');

        $validator = $this->validationFactory->make($body, [
            'email' => ['required', 'email'],
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

        TwoFactor::insert([
            'user_id' => $actor->id,
            'type' => 'email',
            'secret' => $email
        ]);

        return new EmptyResponse(201);
    }
}
