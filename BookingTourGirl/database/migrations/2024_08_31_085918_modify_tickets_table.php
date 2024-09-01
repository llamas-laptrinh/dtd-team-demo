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
        Schema::table('tickets', function (Blueprint $table) {
            // Xóa cột ticket_id
            $table->dropColumn('ticket_id');
            
            // Thay đổi primary key thành 'id'
            // Thêm cột 'id' nếu chưa có
            $table->bigIncrements('id')->first(); // 'bigIncrements' tạo cột 'id' với kiểu số tự động tăng
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
