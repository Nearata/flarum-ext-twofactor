<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Foundation\Config;
use Flarum\Http\RequestUtil;
use Flarum\User\Exception\PermissionDeniedException;
use Laminas\Diactoros\Response\JsonResponse;
use OTPHP\TOTP;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class AppQRCodeController implements RequestHandlerInterface
{
    /**
     * @var Config
     */
    protected $config;

    public function __construct(Config $config)
    {
        $this->config = $config;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();

        if ($actor->twofa_app_active || $actor->cannot('nearata-twofactor.enable')) {
            throw new PermissionDeniedException();
        }

        $otp = TOTP::create();

        $otp->setLabel($actor->username);
        $otp->setIssuer($this->config->url()->getHost());

        return new JsonResponse([
            'secret' => $otp->getSecret(),
            'qrcode' => $otp->getProvisioningUri(),
        ]);
    }
}
