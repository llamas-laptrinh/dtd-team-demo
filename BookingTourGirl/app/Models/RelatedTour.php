<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RelatedTour extends Model
{
    protected $fillable = [
        'title',
        'relatedimage',
        'price',
        'departure'
    ];

    protected $casts = [
        'relatedimage' => 'array', 
    ];
}
