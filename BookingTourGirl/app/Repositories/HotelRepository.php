<?php

namespace App\Repositories;

use App\Models\Hotel;
use App\Interfaces\HotelRepositoryInterface;

class HotelRepository implements HotelRepositoryInterface
{
    /**
     * Get all hotels.
     */
    public function index()
    {
        return Hotel::all();
    }

    /**
     * Get a hotel by its ID.
     */
    public function getById($id)
    {
        return Hotel::findOrFail($id);
    }

    /**
     * Store a new hotel.
     */
    public function store(array $data)
    {
        return Hotel::create($data);
    }

    /**
     * Update an existing hotel.
     */
    public function update(array $data, $id)
    {
        $hotel = Hotel::findOrFail($id);
        $hotel->update($data);
        return $hotel;
    }

    /**
     * Delete a hotel by its ID.
     */
    public function delete($id)
    {
        Hotel::destroy($id);
    }
}
