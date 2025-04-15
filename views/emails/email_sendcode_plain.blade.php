{!! $translator->trans('nearata-twofactor.email_auth_body_plain', [
    '{user_display_name}' => $user->display_name,
    '{passcode}' => $blueprint->passcode(),
    '{expire}' => $settings->get('nearata-twofactor.emailCodeExpireTimeMinutes')
]) !!}
