<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Flarum\User\Exception\PermissionDeniedException;
use Laminas\Diactoros\Response\JsonResponse;
use Nearata\TwoFactor\TotpProvider;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class AppQRCodeController implements RequestHandlerInterface
{
    protected TotpProvider $totp;

    public function __construct(TotpProvider $totp)
    {
        $this->totp = $totp;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();

        if ($actor->twofa_app_active || $actor->cannot('nearata-twofactor.enable')) {
            throw new PermissionDeniedException();
        }

        $otp = $this->totp->getTotp();
        $otp->setLabel($actor->username);

        return new JsonResponse([
            'secret' => $otp->getSecret(),
            'qrcode' => $otp->getProvisioningUri(),
        ]);
    }
}
