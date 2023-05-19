# Two Factor

> Allows your users to activate 2FA authentication.

## Screenshots

Go to the [screenshots](screenshots) folder to see the previews.

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
