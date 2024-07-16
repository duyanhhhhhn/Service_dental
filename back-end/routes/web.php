<?php


use App\Http\Controllers\product_types;
use App\Http\Controllers\ProductTypesController;
use App\Models\producttypes;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route:: get('/producttypes',[ProductTypesController::class,'index']);
