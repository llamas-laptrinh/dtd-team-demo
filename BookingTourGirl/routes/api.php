<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TourController;
use App\Http\Controllers\Api\RelatedTourController;
use App\Http\Controllers\Api\OrderController;


Route::apiResource('tours', TourController::class);
Route::apiResource('related-tours', RelatedTourController::class);
Route::apiResource('orders', OrderController::class);