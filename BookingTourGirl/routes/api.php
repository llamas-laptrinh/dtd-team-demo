<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TourController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\Api\RelatedTourController;


Route::apiResource('tours', TourController::class);
Route::apiResource('related-tours', RelatedTourController::class);
Route::apiResource('news', NewsController::class);