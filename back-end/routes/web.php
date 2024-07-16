<?php


use App\Http\Controllers\product_types;
use App\Models\producttypes;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route:: get('/producttypes',[producttypes::class,'index']);