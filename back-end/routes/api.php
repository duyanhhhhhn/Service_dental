<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\product_types;
use App\Http\Controllers\ProductTypesController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\AppointmentsController;
use App\Http\Controllers\ServicesController;
 

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
// Products
Route::get('/products',[ProductsController::class,'index']);
Route::post('/products',[ProductsController::class,'create']);
Route::delete('/products/{id}',[ProductsController::class,'deleteproducts']);
Route::put('/products/{id}',[ProductsController::class,'edit']);
//login
Route::post('/login',[AuthController::class,'login']);
//news
Route::get('/news',[NewsController::class,'news']);
Route::post('/news',[NewsController::class,'addnews']);
Route::delete('/news/{id}', [NewsController::class, 'deleteNews']);
Route::get('/news/{id}',[NewsController::class,'details']);
Route::put('/news/{id}',[NewsController::class,'updatenews']);
// appointment
Route::get('/appointment',[AppointmentsController::class,'index']);
Route::delete('/appointment/{id}',[AppointmentsController::class,'deleteappointment']);
Route::post('/appointment',[AppointmentsController::class,'create']);

//services
Route::get('/services', [ServicesController::class, 'index']);



