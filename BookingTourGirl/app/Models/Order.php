<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_code',
        'full_name',
        'phone_number',
        'email',
        'tour_code',
        'departure_date',
        'guest_count',
        'payment_method',
        'total_amount',
    ];
}
