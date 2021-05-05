<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\UrlGenerator;
use Illuminate\Support\Str;
use Laminas\Diactoros\Response\EmptyResponse;
use Laminas\Diactoros\Response\JsonResponse;
use OTPHP\TOTP;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class TwoFactorController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');

        if ($actor->isGuest()) {
            return new EmptyResponse(403);
        }

        $active = (bool) $actor->twofa_active;
        $payload = [
            'enabled' => $active,
            'qrCode' => '',
            'secret' => ''
        ];

        if (!$active) {
            $otp = TOTP::create();
            $payload['secret'] = $otp->getSecret();

            $otp->setLabel($actor->username);
            $otp->setIssuer($this->getUrl());
            $payload['qrCode'] = $otp->getProvisioningUri();
        }

        return new JsonResponse($payload);
    }

    private function getUrl(): string
    {
        $baseUrl = resolve(UrlGenerator::class)
            ->to('forum')
            ->base();

        return Str::of($baseUrl)->replaceMatches('/http(s?):\/\//', '');
    }
}
