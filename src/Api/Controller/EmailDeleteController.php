<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Contracts\Events\Dispatcher as EventsDispatcher;
use Illuminate\Contracts\Validation\Factory as ValidationFactory;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;
use Laminas\Diactoros\Response\EmptyResponse;
use Nearata\TwoFactor\EmailProvider;
use Nearata\TwoFactor\Listeners\UserTwoFactorUpdatedEvent;
use Nearata\TwoFactor\Rules\PasscodeRule;
use Nearata\TwoFactor\Rules\PasswordRule;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class EmailDeleteController implements RequestHandlerInterface
{
    public function __construct(
        protected ValidationFactory $validationFactory,
        protected EmailProvider $emailProvider,
        protected EventsDispatcher $eventsDispatcher) {}

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();

        $email = $actor->twoFactor()->where('type', 'email');
        if (! $email->exists()) {
            throw new PermissionDeniedException;
        }

        $only = Arr::only($request->getParsedBody(), ['password', 'passcode']);
        $validator = $this->validationFactory->make($only, [
            'password' => ['required', new PasswordRule($actor)],
            'passcode' => ['required', new PasscodeRule($actor)],
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $email->delete();

        $this->eventsDispatcher->dispatch(new UserTwoFactorUpdatedEvent($actor));

        return new EmptyResponse;
    }
}
