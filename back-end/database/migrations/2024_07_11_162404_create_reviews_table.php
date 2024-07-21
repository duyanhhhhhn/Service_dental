<?php

// use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Schema;

// return new class extends Migration
// {
   
//     public function up(): void
//     {
//         Schema::create('reviews', function (Blueprint $table) {
//             $table->id();
//             $table->string('content');
//             $table->float('rating')->unsigned();
//             $table->bigInteger('product_id')->unsigned();
//             $table->bigInteger('user_id')->unsigned();
//             $table->tinyInteger('status')->default(1);
//             $table->timestamps();
//             $table->foreign('product_id')->references('id')->on('products');
//             $table->foreign('user_id')->references('id')->on('users');
//         });
//     }

//     /**
//      * Reverse the migrations.
//      */
//     public function down(): void
//     {
//         Schema::dropIfExists('reviews');
//     }
// };
