<?php

namespace App\Providers;
use App\Interfaces\UserRepositoryInterface;
use App\Repositories\UserRepository;
use App\Interfaces\TicketRepositoryInterface;
use App\Repositories\TicketRepository;
use App\Interfaces\HotelRepositoryInterface;
use App\Repositories\HotelRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
         $this->app->bind(UserRepositoryInterface::class,UserRepository::class);
         $this->app->bind(TicketRepositoryInterface::class,TicketRepository::class);
         $this->app->bind(HotelRepositoryInterface::class,HotelRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
