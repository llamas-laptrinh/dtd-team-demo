<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->id(); // Tạo cột 'id' với kiểu số tự động tăng
            $table->string('name'); // Tạo cột 'name' kiểu chuỗi
            $table->string('address'); // Tạo cột 'address' kiểu chuỗi
            $table->text('hotel_policy'); // Tạo cột 'hotel_policy' kiểu văn bản
            $table->timestamps(); // Tạo các cột 'created_at' và 'updated_at'
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hotels');
    }
};
