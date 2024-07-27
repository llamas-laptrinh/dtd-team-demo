<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_code')->unique();
            $table->string('full_name');
            $table->string('phone_number');
            $table->string('email');
            $table->string('tour_code');
            $table->date('departure_date');
            $table->integer('guest_count');
            $table->string('payment_method');
            $table->decimal('total_amount', 10, 2);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
