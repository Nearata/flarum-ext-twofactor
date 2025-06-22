<?php

namespace Nearata\TwoFactor\Middleware;

use Flarum\Http\RequestUtil;
use Illuminate\Cache\Repository as CacheRepository;
use Nearata\TwoFactor\Exceptions\TwoFactorLoginInitException;
use Nearata\TwoFactor\Support\CacheKeys;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

class TwoFactorMiddleware implements MiddlewareInterface
{
    private array $endpoints = ['forgot', 'users.update'];

    public function __construct(
        protected CacheRepository $cacheRepository) {}

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $route = $request->getAttribute('routeName');
        $actor = RequestUtil::getActor($request);

        if ($actor->isGuest()) {
            return $handler->handle($request);
        }

        if (! in_array($route, $this->endpoints)) {
            return $handler->handle($request);
        }

        if (! $actor->twoFactor()->exists()) {
            return $handler->handle($request);
        }

        if ($this->cacheRepository->forget(CacheKeys::validate($route, $actor->id))) {
            return $handler->handle($request);
        }

        throw new TwoFactorLoginInitException();
    }
}
