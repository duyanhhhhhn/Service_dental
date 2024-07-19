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

Route::get('/api/producttypes',[ProductTypesController::class,'index']);
Route::get('/api/products',[ProductsController::class,'index']);
Route::post('/api/login',[AuthController::class,'login']);
Route::get('/api/news',[NewsController::class,'news']);
Route::get('/api/news/{id}',[NewsController::class,'details']);
