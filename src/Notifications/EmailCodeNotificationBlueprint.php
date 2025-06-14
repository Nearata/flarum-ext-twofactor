<?php

namespace Nearata\TwoFactor\Notifications;

use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\Notification\MailableInterface;
use Flarum\User\User;
use Symfony\Contracts\Translation\TranslatorInterface;

class EmailCodeNotificationBlueprint implements BlueprintInterface, MailableInterface
{
    public function __construct(
        protected User $user,
        protected string $passcode) {}

    public function passcode(): string
    {
        return $this->passcode;
    }

    public function getFromUser()
    {
        return $this->user;
    }

    public function getSubject()
    {
        return $this->user;
    }

    public function getData()
    {
        return ['passcode' => $this->passcode];
    }

    public static function getType()
    {
        return 'twoFactorEmailPasscode';
    }

    public static function getSubjectModel()
    {
        return User::class;
    }

    public function getEmailView()
    {
        return [
            'text' => 'nearata-twofactor::emails.email_sendcode_plain',
            'html' => 'nearata-twofactor::emails.email_sendcode',
        ];
    }

    public function getEmailSubject(TranslatorInterface $translator)
    {
        return $translator->trans('nearata-twofactor.email.email_auth_subject');
    }
}
