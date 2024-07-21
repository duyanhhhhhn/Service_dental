<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\product_types;
use App\Http\Controllers\ProductTypesController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;
use App\Models\producttypes;
 

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/producttypes',[ProductTypesController::class,'index']);
Route::get('/products',[ProductsController::class,'index']);
Route::post('/login',[AuthController::class,'login']);
Route::get('/news',[NewsController::class,'news']);
