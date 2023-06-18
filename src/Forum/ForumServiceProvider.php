<?php

namespace Nearata\TwoFactor\Forum;

use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Http\RememberAccessToken;
use Flarum\Http\SessionAccessToken;

class ForumServiceProvider extends AbstractServiceProvider
{
    public function boot()
    {
        SessionAccessToken::setModel('twofactor_session', SessionAccessToken::class);
        RememberAccessToken::setModel('twofactor_session_remember', RememberAccessToken::class);
    }
}
