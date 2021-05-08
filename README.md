# Two Factor

> A [Flarum](http://flarum.org) extension. Allow your users to enable two factor authentication.

## WARNING

Not ready for production.

## Install

```sh
composer require nearata/flarum-ext-twofactor
```

## Update

```sh
composer update nearata/flarum-ext-twofactor
php flarum cache:clear
php flarum migrate
```

## Remove

Disable the extension, click uninstall and run these commands:

```sh
composer remove nearata/flarum-ext-twofactor
php flarum cache:clear
```

## License

Distributed under the MIT license. See [LICENSE](LICENSE) for details.
