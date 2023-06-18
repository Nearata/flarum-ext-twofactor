# Two Factor

[![license](https://img.shields.io/github/license/nearata/flarum-ext-twofactor?style=flat)](https://github.com/Nearata/flarum-ext-twofactor/blob/main/UNLICENSE)
[![packagist](https://img.shields.io/packagist/v/nearata/flarum-ext-twofactor?style=flat)](https://packagist.org/packages/nearata/flarum-ext-twofactor)
[![changelog](https://img.shields.io/github/release-date/nearata/flarum-ext-twofactor?label=last%20release%20date)](https://github.com/Nearata/flarum-ext-twofactor/blob/main/CHANGELOG.md)

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

Go to `User Settings` -> `Two-Factor Authentication` section
