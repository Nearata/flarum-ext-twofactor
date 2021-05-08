<?php

namespace Nearata\TwoFactor\Api\Controller;

use Laminas\Diactoros\Response\EmptyResponse;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class TwoFactorBackupsController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');

        if ($actor->isGuest()) {
            return new EmptyResponse(403);
        }

        if (!$actor->twofa_active) {
            return new EmptyResponse(401);
        }

        $codes = json_decode($actor->twofa_codes);

        if ($codes && count($codes) > 0) {
            return new EmptyResponse(401);
        }

        $newBackups = [];

        for($i = 0; $i < 16; $i++) {
            $bytes = random_bytes(4);
            $hex = bin2hex($bytes);
            array_push($newBackups, $hex);
        }

        $actor->twofa_codes = json_encode($newBackups);
        $actor->save();

        return new JsonResponse(['codes' => $newBackups]);
    }
}
