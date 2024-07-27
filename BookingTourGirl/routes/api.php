<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\LoginUserController;
use App\Http\Controllers\Auth\UserProfileController;

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('/register', [RegisteredUserController::class,'store']); 
Route::post('/login', [LoginUserController::class,'login']); 

Route::group(['middleware'=> ["auth:sanctum"]], function(){
        Route::post('updateProfile', [UserProfileController::class,'updateProfile']); 
        Route::put('updatePassword', [UserProfileController::class,'updatePassword']); 
        Route::get('logout', [LoginUserController::class,'logout']); 
});
