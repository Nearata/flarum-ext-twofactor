<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;
use Illuminate\Support\Collection;

return [
    'up' => function (Builder $schema) {
        $schema->create('two_factor_backup_codes', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->unsigned();
            $table->string('type', 10);
            $table->string('code', 255);
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        $schema->getConnection()->table('users')->select([
            'id as user_id',
            'twofa_app_codes'
          ])
          ->where('twofa_app_active', 1)
          ->orderBy('joined_at')
          ->chunk(100, function (Collection $users) use ($schema) {
            foreach ($users as $user) {
                /** @var array */
                $codes = json_decode($user->twofa_app_codes);

                foreach($codes as $code) {
                    $schema->getConnection()->table('two_factor_backup_codes')->insert([
                        'user_id' => $user->user_id,
                        'type' => 'app',
                        'code' => password_hash($code, null)
                    ]);
                }
            }
          });
    },
    'down' => function (Builder $schema) {
        $schema->drop('two_factor_backup_codes');
    }
];
