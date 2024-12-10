<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('booking_tours', function (Blueprint $table) {
            $table->id();
            $table->string('fullname');
            $table->string('email');
            $table->string('phone');
            $table->json('preferences')->nullable();
            $table->text('special_request')->nullable();
            $table->enum('payment_method', ['cash', 'bankTransfer']);
            $table->string('tour_title');
            $table->string('tour_code');
            $table->string('departure_date');
            $table->integer('guest_count');
            $table->decimal('price_per_guest', 10, 2);
            $table->decimal('total_price', 10, 2);
            $table->string('hotline');
            $table->string('image_url')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('booking_tours');
    }
};