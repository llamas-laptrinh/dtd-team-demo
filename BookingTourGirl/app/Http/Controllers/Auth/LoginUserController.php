<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use App\Classes\ApiResponseClass;
use App\Interfaces\UserRepositoryInterface;

class LoginUserController extends Controller
{
    private UserRepositoryInterface $userRepositoryInterface;
    public function __construct(UserRepositoryInterface $userRepositoryInterface)
    {
        $this->userRepositoryInterface = $userRepositoryInterface;
    }
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
       public function login(LoginRequest $request){
        $user= $this->userRepositoryInterface->login($request->email);
        if(!empty($user)){
            if(Hash::check($request->password,$user->password)){
                $token=$user->createToken('My token')->plainTextToken;
                $data=['token'=>$token, 'user'=>$user];
                return ApiResponseClass::sendResponse($data,'Login Successful',200);
            };
            return ApiResponseClass::sendResponse('','Password misses match',400);}
        return ApiResponseClass::sendResponse('','Email doesnt exist',400);
    }
      public function logout(){
        auth()->user()->tokens()->delete();
        return ApiResponseClass::sendResponse('','Logout successfully',200);
    }


}
