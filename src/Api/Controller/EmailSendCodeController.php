<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Exception\NotAuthenticatedException;
use Flarum\User\UserRepository;
use Illuminate\Contracts\Queue\Queue;
use Illuminate\Contracts\Validation\Factory as ValidationFactory;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;
use Laminas\Diactoros\Response\EmptyResponse;
use Nearata\TwoFactor\EmailProvider;
use Nearata\TwoFactor\Jobs\EmailSendCodeNotificationJob;
use Nearata\TwoFactor\Notifications\EmailCodeNotificationBlueprint;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class EmailSendCodeController implements RequestHandlerInterface
{
    public function __construct(
        protected UserRepository $users,
        protected SettingsRepositoryInterface $settings,
        protected EmailProvider $emailProvider,
        protected Queue $queue,
        protected ValidationFactory $validationFactory) {}

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $body = $request->getParsedBody();

        // user is logging in
        if ($actor->isGuest()) {
            $identification = Arr::get($body, 'identification');
            $password = Arr::get($body, 'password');

            $actor = $this->users->findByIdentification($identification);

            if (is_null($actor) || ! $actor->checkPassword($password)) {
                throw new NotAuthenticatedException;
            }
        }

        $email = $actor->twoFactor()->where('type', 'email')->value('secret');

        // user is configuring
        if (is_null($email)) {
            $email = Arr::get($body, 'email');
            $validator = $this->validationFactory->make(['email' => $email], [
                'email' => ['required', 'email'],
            ]);

            if ($validator->fails()) {
                throw new ValidationException($validator);
            }
        }

        $passcode = $this->emailProvider->generatePasscode($actor);

        /**
         * @todo: i dont need entries in database
         * they would never be deleted if not done
         * manually and with this i can send to
         * the email i want dont know if better
         * alternatives exist
         */
        $this->queue->push(new EmailSendCodeNotificationJob(new EmailCodeNotificationBlueprint($actor, $passcode), $actor, $email));

        return new EmptyResponse;
    }
}
