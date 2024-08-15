<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use App\Classes\ApiResponseClass;
use App\Interfaces\UserRepositoryInterface;

class UserProfileController extends Controller
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
 public function updateProfile(Request $request)
    {   
        $user = auth()->user();
        
        $validated = $request->validate([        
            'name'=>['required'],	
            'email'=>['required'],	
            'display_first_name'=>['nullable'],	
            'display_last_name'=>['nullable'],	
            'phone_number'=>['nullable','numeric','digits_between:10,15', 'regex:/^0[0-9]{9,14}$/'],	
            'phone_region'=>['nullable','numeric'],	
            'date_of_birth'=>['nullable','date'],	
            'nationality'=>['nullable'],	
            'gender'=>['nullable'],	
            'address_country'=>['nullable'],	
            'address'=>['nullable'],	
            'address_city'=>['nullable'],	
            'address_post_code'=>['nullable','numeric'],	
        ]);
        
        
        $details =[
             'name'=>$request->name,
             'email'=>$request->email,
             'display_first_name'=>$request->display_first_name,
             'display_last_name'=>$request->display_last_name,
             'phone_number'=>$request->phone_number,
             'phone_region'=>$request->phone_region,
             'date_of_birth'=>$request->date_of_birth,
             'nationality'=>$request->nationality,
             'gender'=>$request->gender,
             'address_country'=>$request->address_country,
             'address'=>$request->address,
             'address_city'=>$request->address_city,
             'address_post_code'=>$request->address_post_code,
        ];
        DB::beginTransaction();
        try{
             $profile = $this->userRepositoryInterface->update($details,$user->id);

             DB::commit();
             return ApiResponseClass::sendResponse($profile,'Update profile Successful',200);

        }catch(\Exception $ex){
            return ApiResponseClass::rollback($ex);
        }
    }
    public function updatePassword(Request $request)
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'confirmed'],
        ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        $data = auth()->user();
        return ApiResponseClass::sendResponse($data,'Update password successfully',201);
    }

}
