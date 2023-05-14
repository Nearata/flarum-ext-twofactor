# Two Factor

> Allows your users to activate 2FA authentication.

## Note

- To allow the generation of backup codes, you must enable it in the admin settings of the extension.
- Users can't use API if they have two factor enabled.

## Install

```sh
composer require nearata/flarum-ext-twofactor:"*"
```

## Update

```sh
composer require nearata/flarum-ext-twofactor:"*"
php flarum migrate
php flarum cache:clear
```

## Remove

Disable the extension, click uninstall and run these commands:

```sh
composer remove nearata/flarum-ext-twofactor
php flarum cache:clear
```

## How to use

Go to `User Settings` -> `Two Factor` button -> follow the screen
