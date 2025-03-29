<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Flarum\User\Exception\PermissionDeniedException;
use Laminas\Diactoros\Response\JsonResponse;
use Nearata\TwoFactor\TotpProvider;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class AppInitController implements RequestHandlerInterface
{
    public function __construct(protected TotpProvider $totp)
    {
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();

        if ($actor->twoFactor()->where('type', 'app')->exists() || $actor->cannot('nearata-twofactor.enable')) {
            throw new PermissionDeniedException();
        }

        return new JsonResponse([
            'secret' => $this->totp->getSecret(),
            'qrcode' => $this->totp->getQrcode($actor),
        ]);
    }
}
