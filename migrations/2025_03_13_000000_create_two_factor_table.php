<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

return [
    'up' => function (Builder $schema) {
        $schema->create('two_factor', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->unsigned();
            $table->string('type', 10);
            $table->string('secret', 120)->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        $schema->getConnection()->table('users')->select([
            'id as user_id',
            'twofa_app_secret as secret'
          ])
          ->where('twofa_app_active', 1)
          ->orderBy('joined_at')
          ->chunk(100, function (Collection $users) use ($schema) {
            $data = $users
                ->map(function($item) {
                    $array = (array) $item;
                    return Arr::add($array, 'type', 'app');
                });
            $schema->getConnection()->table('two_factor')->insert($data->toArray());
          });
    },
    'down' => function (Builder $schema) {
        $schema->drop('two_factor');
    }
];
