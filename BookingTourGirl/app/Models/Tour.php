<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    protected $fillable = [
        'title',
        'imagedetail',
        'location',
        'duration',
        'code',
        'departure_dates',
        'transport',
        'highlights',
        'description',
        'contact_info',
        'tour_program',
        'services_included',
        'regulations',
        'original_price',
        'discounted_price',
        'departure_date',
        'guest_count',
        'hotline_number',
    ];

    protected $casts = [
        'imagedetail' => 'array',
        'departure_dates' => 'array',
        'highlights' => 'array',
    ];
}
