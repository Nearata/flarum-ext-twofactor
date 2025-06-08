<?php

namespace Nearata\TwoFactor\Rules;

use Flarum\User\User;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Contracts\Validation\ValidatorAwareRule;
use Illuminate\Support\Arr;
use Illuminate\Validation\Validator;
use Nearata\TwoFactor\AppProvider;
use Nearata\TwoFactor\RecoveryCodesProvider;
use Symfony\Contracts\Translation\TranslatorInterface;

class PasscodeRule implements Rule, DataAwareRule, ValidatorAwareRule
{
    protected array $data = [];
    protected Validator $validator;
    private bool $backupCodeUsed = false;

    public function __construct(
        protected User $user)
    {
    }

    public function passes($attribute, $value)
    {
        return $this->processProvider($value);
    }

    public function message()
    {
        return resolve(TranslatorInterface::class)->trans('nearata-twofactor.forum.invalid_passcode');
    }

    public function setData($data)
    {
        $this->data = $data;
        return $this;
    }

    public function setValidator($validator)
    {

        $this->validator = $validator;
        $this->validator->after(function (Validator $validator) {
            if ($validator->validated() && $this->backupCodeUsed) {
                $this->user->twoFactorRecoveryCodes()->first()->delete();
            }
        });
        return $this;
    }

    private function processProvider(mixed $value): bool
    {
        $providers = resolve('container')->tagged('nearata-twofactor.providers');
        $valid = false;

        $appSecret = Arr::get($this->data, 'secret');

        foreach ($providers as $i) {
            $valid = $i->check($this->user, $value);

            if (! $valid && $i instanceof AppProvider && ! is_null($appSecret)) {
                $valid = $i->withSecret($appSecret)->check($this->user, $value);
            }

            if ($valid) {
                $this->backupCodeUsed = $i instanceof RecoveryCodesProvider;
                break;
            }
        }

        return $valid;
    }
}
