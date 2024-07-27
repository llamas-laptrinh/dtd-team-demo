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
        //
         Schema::table('users', function (Blueprint $table) {

            $table->string('display_first_name')->nullable();
            $table->string('display_last_name')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('phone_region')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('nationality')->nullable();
            $table->string('gender')->nullable();
            $table->string('address_country')->nullable();
            $table->string('address')->nullable();
            $table->string('address_city')->nullable();
            $table->string('address_post_code')->nullable();
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
