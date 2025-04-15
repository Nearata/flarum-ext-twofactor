{!! \Illuminate\Support\Str::markdown(
    $translator->trans('nearata-twofactor.email.email_auth_body', [
        '{user_display_name}' => $user->display_name,
        '{passcode}' => $blueprint->passcode(),
        '{expire}' => $settings->get('nearata-twofactor.emailCodeExpireTimeMinutes')
    ])
) !!}
