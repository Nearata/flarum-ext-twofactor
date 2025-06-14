<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Illuminate\Contracts\Events\Dispatcher as EventsDispatcher;
use Illuminate\Contracts\Validation\Factory as validationFactory;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;
use Laminas\Diactoros\Response\EmptyResponse;
use Nearata\TwoFactor\AppProvider;
use Nearata\TwoFactor\Listeners\UserTwoFactorUpdatedEvent;
use Nearata\TwoFactor\Model\TwoFactor;
use Nearata\TwoFactor\Rules\PasscodeRule;
use Nearata\TwoFactor\Rules\PasswordRule;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class AppCreateController implements RequestHandlerInterface
{
    public function __construct(
        protected AppProvider $appProvider,
        protected validationFactory $validationFactory,
        protected EventsDispatcher $eventsDispatcher) {}

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();
        $actor->assertCan('nearata-twofactor.enable');

        if ($actor->twoFactor()->where('type', 'app')->exists()) {
            return new EmptyResponse(400);
        }

        $only = Arr::only($request->getParsedBody(), ['password', 'secret', 'passcode']);
        $validator = $this->validationFactory->make($only, [
            'password' => ['required', new PasswordRule($actor)],
            'secret' => ['required'],
            'passcode' => ['required', new PasscodeRule($actor)],
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        TwoFactor::insert([
            'user_id' => $actor->id,
            'type' => 'app',
            'secret' => Arr::get($only, 'secret'),
        ]);

        $this->eventsDispatcher->dispatch(new UserTwoFactorUpdatedEvent($actor));

        return new EmptyResponse;
    }
}
