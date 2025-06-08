<?php

namespace Nearata\TwoFactor\Jobs;

use Flarum\Notification\MailableInterface;
use Flarum\Queue\AbstractJob;
use Flarum\User\User;
use Illuminate\Contracts\Mail\Mailer;
use Illuminate\Mail\Message;
use Symfony\Contracts\Translation\TranslatorInterface;

class EmailSendCodeNotificationJob extends AbstractJob
{
    public function __construct(
        private MailableInterface $blueprint,
        private User $recipient,
        private string $email)
    {
        parent::__construct();

        $this->blueprint = $blueprint;
        $this->recipient = $recipient;
    }

    public function handle(Mailer $mailer, TranslatorInterface $translator)
    {
        $blueprint = $this->blueprint;
        $user = $this->recipient;
        $mailer->send(
            $this->blueprint->getEmailView(),
            compact('blueprint', 'user'),
            function (Message $message) use ($translator) {
                $message->to($this->email, $this->recipient->display_name)
                        ->subject($this->blueprint->getEmailSubject($translator));
            }
        );
    }
}
