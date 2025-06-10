<?php

namespace Nearata\TwoFactor\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property string $type
 * @property string|null $secret
 * @property \Carbon\Carbon $created_at
 *
 * @property-read User $user
 */
class TwoFactor extends AbstractModel
{
    protected $table = 'two_factor';

    protected $dates = ['created_at'];

    protected $fillable = ['user_id', 'type', 'secret'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
