<?php


use App\Http\Controllers\product_types;
use App\Http\Controllers\ProductTypesController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;
use App\Models\producttypes;
use Illuminate\Support\Facades\Route;
 
Route::get('/', function () {
    return view('welcome');
});
Route::prefix('admin')->middleware('admin')->group(function () {
});

