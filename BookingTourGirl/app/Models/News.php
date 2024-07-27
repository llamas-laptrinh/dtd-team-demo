<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
       'banner_url',
       'description',
       'author',
       'view_count',
    ];
    // protected $casts = [
    //     'banner_url' => 'string', 
    // ];

}
