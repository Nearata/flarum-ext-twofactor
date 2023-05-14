<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Exception\PermissionDeniedException;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class AppBackupsController implements RequestHandlerInterface
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();

        $actor->assertCan('nearata-twofactor.enable');

        if (!$actor->twofa_app_active) {
            throw new PermissionDeniedException();
        }

        $canGenerate = $this->settings->get('nearata-twofactor.admin.generate_backups');

        if (!$canGenerate) {
            throw new PermissionDeniedException();
        }

        $codes = $actor->twofa_app_codes;

        if ($codes && count($codes) > 0) {
            throw new PermissionDeniedException();
        }

        $newBackups = [];

        for($i = 0; $i < 16; $i++) {
            $bytes = random_bytes(4);
            $hex = bin2hex($bytes);

            array_push($newBackups, $hex);
        }

        $actor->twofa_app_codes = $newBackups;
        $actor->save();

        return new JsonResponse(['codes' => $newBackups]);
    }
}
