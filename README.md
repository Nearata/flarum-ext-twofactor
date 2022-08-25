# Two Factor

> A [Flarum](http://flarum.org) extension. Allow your users to enable two factor authentication.

## Note

- To allow the generation of backup codes, you must enable it in the admin settings of the extension.
- Users can't use API if they have two factor enabled.

## Install

```sh
composer require nearata/flarum-ext-twofactor
```

## Remove

Disable the extension, click uninstall and run these commands:

```sh
composer remove nearata/flarum-ext-twofactor
php flarum cache:clear
```
