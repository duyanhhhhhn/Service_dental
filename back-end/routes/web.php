<?php


use App\Http\Controllers\product_types;
use App\Http\Controllers\ProductTypesController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\AuthController;
use App\Http\Controller\NewsController;
use App\Models\producttypes;
use Illuminate\Support\Facades\Route;
 
Route::get('/', function () {
    return view('welcome');
});

Route::get('/producttypes',[ProductTypesController::class,'index']);
Route::get('/api/products',[ProductsController::class,'index']);
Route::get('/login',[AuthController::class,'login']);
