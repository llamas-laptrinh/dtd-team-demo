<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Hotel;
use App\Http\Requests\StoreHotelRequest;
use App\Http\Requests\UpdateHotelRequest;
use App\Interfaces\HotelRepositoryInterface;
use App\Classes\ApiResponseClass;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    private HotelRepositoryInterface $hotelRepositoryInterface;

    public function __construct(HotelRepositoryInterface $hotelRepositoryInterface)
    {
        $this->hotelRepositoryInterface = $hotelRepositoryInterface;
    }

    public function index()
    {
        $data = $this->hotelRepositoryInterface->index();
        return ApiResponseClass::sendResponse($data, '', 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHotelRequest $request)
    {
        $details = [
            'name' => $request->name,
            'address' => $request->address,
            'hotel_policy' => $request->hotel_policy,
        ];

        DB::beginTransaction();
        try {
            $hotel = $this->hotelRepositoryInterface->store($details);
            DB::commit();
            return ApiResponseClass::sendResponse($hotel, 'Save hotel successful', 201);

        } catch (\Exception $ex) {
            DB::rollBack();
            return ApiResponseClass::rollback($ex);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Hotel $hotel)
    {
        return ApiResponseClass::sendResponse($hotel, '', 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Hotel $hotel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHotelRequest $request, Hotel $hotel)
    {
        $details = [
            'name' => $request->name,
            'address' => $request->address,
            'hotel_policy' => $request->hotel_policy,
        ];

        DB::beginTransaction();
        try {
            $updatedHotel = $this->hotelRepositoryInterface->update($details, $hotel->id);
            DB::commit();
            return ApiResponseClass::sendResponse($updatedHotel, 'Update hotel successful', 200);

        } catch (\Exception $ex) {
            DB::rollBack();
            return ApiResponseClass::rollback($ex);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $this->hotelRepositoryInterface->delete($id);
        return ApiResponseClass::sendResponse(null, 'Hotel delete successful', 200);
    }
}
