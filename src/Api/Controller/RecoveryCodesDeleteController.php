<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Contracts\Validation\Factory as ValidationFactory;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;
use Laminas\Diactoros\Response\EmptyResponse;
use Nearata\TwoFactor\Rules\PasswordRule;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class RecoveryCodesDeleteController implements RequestHandlerInterface
{
    public function __construct(protected ValidationFactory $validationFactory)
    {
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();

        if (! ($actor->twoFactor()->exists() || $actor->twoFactorRecoveryCodes()->exists())) {
            throw new PermissionDeniedException();
        }

        $body = $request->getParsedBody();
        $validator = $this->validationFactory->make(['password' => Arr::get($body, 'password')], [
            'password' => ['required', new PasswordRule($actor)]
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $actor->twoFactorRecoveryCodes()->delete();

        return new EmptyResponse();
    }
}
