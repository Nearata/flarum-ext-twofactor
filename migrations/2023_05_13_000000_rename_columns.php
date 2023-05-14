<?php

use Flarum\Database\Migration;

return Migration::renameColumns('users', [
    'twofa_secret' => 'twofa_app_secret',
    'twofa_active' => 'twofa_app_active',
    'twofa_codes' => 'twofa_app_codes'
]);
