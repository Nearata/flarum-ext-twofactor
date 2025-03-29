<?php

namespace Nearata\TwoFactor\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property string $type
 * @property string $code
 * @property \Carbon\Carbon $created_at
 *
 * @property-read User $user
 */
class TwoFactorBackupCodes extends AbstractModel
{
    protected $table = 'two_factor_backup_codes';

    protected $dates = ['created_at'];

    protected $fillable = ['user_id', 'type', 'code'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
