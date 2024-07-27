<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tours', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->json('imagedetail'); 
            $table->string('location');
            $table->string('duration');
            $table->string('code');
            $table->json('departure_dates'); 
            $table->string('transport');
            $table->json('highlights'); 
            $table->text('description');
            $table->text('contact_info');
            $table->text('tour_program');
            $table->text('services_included');
            $table->text('regulations');
            $table->decimal('original_price', 15, 2);
            $table->decimal('discounted_price', 15, 2);
            $table->date('departure_date');
            $table->string('guest_count');
            $table->string('hotline_number');
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tours');
    }
};
