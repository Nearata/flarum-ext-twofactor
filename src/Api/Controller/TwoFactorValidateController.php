<?php

namespace Nearata\TwoFactor\Api\Controller;

use Carbon\Carbon;
use Flarum\Http\RequestUtil;
use Illuminate\Cache\Repository as CacheRepository;
use Illuminate\Contracts\Validation\Factory as ValidationFactory;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;
use Laminas\Diactoros\Response\EmptyResponse;
use Laminas\Diactoros\Response\JsonResponse;
use Nearata\TwoFactor\Rules\PasscodeRule;
use Nearata\TwoFactor\Support\CacheKeys;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class TwoFactorValidateController implements RequestHandlerInterface
{
    public function __construct(
        protected ValidationFactory $validationFactory,
        protected CacheRepository $cacheRepository) {}

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();

        // user checking if already validated the 2fa
        if ($request->getMethod() === 'GET') {
            $route = Arr::get($request->getQueryParams(), 'route');

            if (! $actor->twoFactor()->exists()) {
                return new JsonResponse(['validated' => true]);
            }

            return new JsonResponse([
                'validated' => $this->cacheRepository->has(CacheKeys::validate($route, $actor->id))
            ]);
        }

        $only = Arr::only($request->getParsedBody(), ['passcode', 'route']);
        $cacheKey = CacheKeys::validate($only['route'], $actor->id);

        if ($this->cacheRepository->has($cacheKey)) {
            return new EmptyResponse();
        }

        $validator = $this->validationFactory->make($only, [
            'passcode' => ['required', new PasscodeRule($actor)],
            'route' => ['required']
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $this->cacheRepository->put($cacheKey, 1, Carbon::now()->addMinutes(1));

        return new EmptyResponse();
    }
}
