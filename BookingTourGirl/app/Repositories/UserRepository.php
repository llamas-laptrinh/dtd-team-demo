<?php

namespace App\Repositories;

use App\Interfaces\UserRepositoryInterface;
use App\Models\User;
use App\Models\Folder;
use Illuminate\Support\Facades\Auth;

class UserRepository implements UserRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function getAllUser(){
        $user = auth()->user();
        return User::where('id', '!=', $user->id)->get();//except 1
    }

    public function register(array $data){
        $user = User::create($data);
        $folderData =['name'=>'Upload','user_id'=>$user->id];
        $folder =Folder::create($folderData);
        return User::where('id',$user->id)->update($data);
    }
    public function login(string $email){
        return User::where('email', $email)->first();
    }
    public function profile(){
    }
    public function logout(){
    }
    public function update(array $data,$id){
       User::whereId($id)->update($data);
       return User::where('id', $id)->first();
    }
}
