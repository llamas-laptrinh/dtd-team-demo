<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'address',
        'hotel_policy',
    ];

    // Nếu bạn không muốn sử dụng các cột 'created_at' và 'updated_at', bạn có thể thiết lập:
    public $timestamps = true;
}
