<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingTour extends Model
{
    use HasFactory;

    protected $fillable = [
        'fullname',
        'email',
        'phone',
        'preferences',
        'special_request',
        'payment_method',
        'tour_title',
        'tour_code',
        'departure_date',
        'guest_count',
        'price_per_guest',
        'total_price',
        'hotline',
        'image_url',
    ];

    protected $casts = [
        'preferences' => 'array',
    ];
}
