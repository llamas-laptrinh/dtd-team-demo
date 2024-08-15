<?php

namespace App\Interfaces;

interface UserRepositoryInterface
{
    //
    public function getAllUser();
    public function register(array $data);
    public function login(string $email);
    public function profile();
    public function logout();
    public function update(array $data,$id);
}
