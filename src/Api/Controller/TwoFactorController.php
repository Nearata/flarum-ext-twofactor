<?php

namespace Nearata\TwoFactor\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Flarum\User\Exception\NotAuthenticatedException;
use Flarum\User\UserRepository;
use Illuminate\Support\Arr;
use Nearata\TwoFactor\Api\Serializer\TwoFactorSerializer;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class TwoFactorController extends AbstractListController
{
    public $serializer = TwoFactorSerializer::class;

    public function __construct(protected UserRepository $users) {}

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);

        if ($request->getMethod() === 'GET') {
            $actor->assertRegistered();
        }

        if ($actor->isGuest()) {
            $body = $request->getParsedBody();
            $identification = Arr::get($body, 'identification');
            $password = Arr::get($body, 'password');

            $actor = $this->users->findByIdentification($identification);

            if (is_null($actor) || ! $actor->checkPassword($password)) {
                throw new NotAuthenticatedException;
            }
        }

        return $actor->twoFactor()->get();
    }
}
