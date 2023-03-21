<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;


class Content extends Model
{
    use HasFactory, HasApiTokens;
    protected $table = 'contents';
     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'type',
        'quantity',
        'price',
        'image'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
