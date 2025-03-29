<?php

namespace Nearata\TwoFactor\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use InvalidArgumentException;
use Nearata\TwoFactor\Model\TwoFactor;

class TwoFactorSerializer extends AbstractSerializer
{
    protected $type = 'twoFactor';

    protected function getDefaultAttributes($model)
    {
        if (! ($model instanceof TwoFactor)) {
            throw new InvalidArgumentException(
                get_class($this).' can only serialize instances of '.TwoFactor::class
            );
        }

        return [
            'type' => $model->type,
            'createdAt' => $this->formatDate($model->created_at),
        ];
    }

    protected function user(TwoFactor $model)
    {
        return $this->hasMany($model, BasicUserSerializer::class, 'user_id');
    }
}
