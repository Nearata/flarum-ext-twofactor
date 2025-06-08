<?php

namespace Nearata\TwoFactor\Rules;

use Flarum\User\User;
use Illuminate\Contracts\Validation\Rule;
use Symfony\Contracts\Translation\TranslatorInterface;

class PasswordRule implements Rule
{
    public function __construct(protected User $user)
    {
    }

    public function passes($attribute, $value)
    {
        return $this->user->checkPassword($value);
    }

    public function message()
    {
        return resolve(TranslatorInterface::class)->trans('validation.password');
    }
}
