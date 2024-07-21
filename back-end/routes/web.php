<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ProductTypesController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Route;

Route::get('/sanctum/csrf-cookie', function () {
    return response()->json(['message' => 'CSRF token fetched']);
});

Route::get('/', function () {
    return view('welcome');
});
Route::get('/api/producttypes',[ProductTypesController::class,'index']);
Route::get('/api/products',[ProductsController::class,'index']);
Route::post('/api/login',[AuthController::class,'login']);
Route::get('/api/news',[NewsController::class,'news']);
Route::get('/api/news/{id}',[NewsController::class,'details']);
Route::post('/api/appointments',[AppointmentController::class,'store']);
