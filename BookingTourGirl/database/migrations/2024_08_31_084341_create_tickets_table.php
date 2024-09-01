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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id('ticket_id'); // Tạo cột 'ticket_id' với kiểu số tự động tăng
            $table->string('ticket_type'); // Tạo cột 'ticket_type' kiểu chuỗi
            $table->string('event_name'); // Tạo cột 'event_name' kiểu chuỗi
            $table->decimal('price', 10, 2); // Tạo cột 'price' kiểu số thập phân với 2 chữ số thập phân
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
        Schema::dropIfExists('tickets');
    }
};
