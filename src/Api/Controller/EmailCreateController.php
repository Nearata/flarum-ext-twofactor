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
use Nearata\TwoFactor\Model\TwoFactor;
use Nearata\TwoFactor\Rules\PasscodeRule;
use Nearata\TwoFactor\Rules\PasswordRule;
use Nearata\TwoFactor\Listeners\UserTwoFactorUpdatedEvent;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class EmailCreateController implements RequestHandlerInterface
{
    public function __construct(
        protected EmailProvider $emailProvider,
        protected ValidationFactory $validationFactory,
        protected EventsDispatcher $eventsDispatcher)
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

        $only = Arr::only($request->getParsedBody(), ['email', 'password', 'passcode']);
        $validator = $this->validationFactory->make($only, [
            'email' => ['required', 'email'],
            'password' => ['required', new PasswordRule($actor)],
            'passcode' => ['required', new PasscodeRule($actor)]
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        TwoFactor::insert([
            'user_id' => $actor->id,
            'type' => 'email',
            'secret' => Arr::get($only, 'email')
        ]);

        $this->eventsDispatcher->dispatch(new UserTwoFactorUpdatedEvent($actor));

        return new EmptyResponse();
    }
}
