<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Illuminate\Contracts\Events\Dispatcher as EventsDispatcher;
use Illuminate\Contracts\Validation\Factory as ValidationFactory;
use Illuminate\Validation\ValidationException;
use Laminas\Diactoros\Response\EmptyResponse;
use Nearata\TwoFactor\Rules\PasscodeRule;
use Nearata\TwoFactor\Rules\PasswordRule;
use Nearata\TwoFactor\UserTwoFactorUpdatedEvent;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class AppDeleteController implements RequestHandlerInterface
{
    public function __construct(
        protected ValidationFactory $validationFactory,
        protected EventsDispatcher $eventsDispatcher)
    {
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();
        $actor->assertCan('nearata-twofactor.enable');

        $app = $actor->twoFactor()->where('type', 'app');

        if (! $app->exists()) {
            return new EmptyResponse(400);
        }

        $body = $request->getParsedBody();
        $validator = $this->validationFactory->make($body, [
            'password' => ['required', new PasswordRule($actor)],
            'passcode' => ['required', new PasscodeRule($actor)]
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $app->delete();

        $this->eventsDispatcher->dispatch(new UserTwoFactorUpdatedEvent($actor));

        return new EmptyResponse();
    }
}
