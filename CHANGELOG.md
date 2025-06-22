# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

- php 8.1
- flarum 1.8
- authenticator app: hash backup codes like passwords
- authenticator app: admin setting to adjust the number of backup codes to generate. None if <= 0.
- admins can no longer disable others 2fa
- authenticator app: replace FileSaver.js with plain js
- fix some of the user settings being exposed to others [issue #10](https://github.com/Nearata/flarum-ext-twofactor/issues/15) [pull #15](https://github.com/Nearata/flarum-ext-twofactor/pull/16)
- add authentication by email [issue #6](https://github.com/Nearata/flarum-ext-twofactor/issues/6)
- backup codes no longer depend on the authenticator app, no longer auto-generate, user dependant
- fire `UserTwoFactorUpdatedEvent` on user two factor updates
- require 2fa for change password, change email

## [2.2.1] - 2023-06-18

- fix: remember token not working

## [2.2.0] - 2023-05-19

- bump php to 8
- bump Flarum to 1.7
- feat: Allow admins to turn off user two-factor authentication [#9]
- fix: Conflict with Cloudflare Turnstile [#10]
- feat: api again available to users with two-factor enabled

## [2.1.1] - 2022-09-15

- Fix required Flarum version.

## [2.1.0] - 2022-08-26

- Add php 8 support ([Issue #7](https://github.com/Nearata/flarum-ext-twofactor/issues/7)).
- Ability to choose which groups can enable Two Factor.

## [2.0.1] - 2021-09-11

- Fix wrong generation of backup qr codes ([Issue #3](https://github.com/Nearata/flarum-ext-twofactor/issues/3)).

## [2.0.0] - 2021-06-20

- Update to Flarum 1.0

## [1.0.4] - 2021-05-16

- (Improvement) Using config class to retrieve website host instead of using `UrlGenerator` with regex.

## [1.0.3] - 2021-05-12

- (Fix) actually fix required flarum/core version constraint.

## [1.0.2] - 2021-05-12

- (Fix) version constraint.

## [1.0.1] - 2021-05-12

- (Add) Users can't use API if they have two factor enabled.

## [1.0.0] - 2021-05-10

- First release
