<?php

namespace Nearata\TwoFactor\Api\Controller;

use Closure;
use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Contracts\Validation\Factory as ValidationFactory;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;
use Laminas\Diactoros\Response\JsonResponse;
use Nearata\TwoFactor\Model\TwoFactorRecoveryCodes;
use Nearata\TwoFactor\Rules\PasswordRule;
use Nearata\TwoFactor\RecoveryCodesProvider;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class RecoveryCodesCreateController implements RequestHandlerInterface
{
    public function __construct(
        protected SettingsRepositoryInterface $settings,
        protected RecoveryCodesProvider $recovery,
        protected Hasher $hasher,
        protected ValidationFactory $validationFactory)
    {
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();

        if (! $actor->twoFactor()->exists()) {
            throw new PermissionDeniedException();
        }

        if ($actor->twoFactorRecoveryCodes()->exists()) {
            throw new PermissionDeniedException();
        }

        $number = (int) $this->settings->get('nearata-twofactor.recoveryCodesGeneratedNumber');

        if ($number === 0) {
            throw new PermissionDeniedException();
        }

        $body = $request->getParsedBody();
        $validator = $this->validationFactory->make(['password' => Arr::get($body, 'password')], [
            'password' => ['required', new PasswordRule($actor)]
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $codes = $this->recovery->generateCodes();

        TwoFactorRecoveryCodes::insert(
            array_map(function (string $item) use ($actor) {
                return [
                    'user_id' => $actor->id,
                    'code' => $this->hasher->make($item)
                ];
            }, $codes)
        );

        return new JsonResponse(['data' => $codes]);
    }
}
