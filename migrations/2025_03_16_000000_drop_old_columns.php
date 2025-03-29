<?php

use Flarum\Database\Migration;

return Migration::dropColumns('users', [
    'twofa_app_secret' => ['string', 'length' => 120],
    'twofa_app_active' => ['boolean', 'default' => false],
    'twofa_app_codes' => ['string', 'length' => 200]
]);
