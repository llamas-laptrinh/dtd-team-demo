<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BookingTour;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Exception;

class BookingTourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $bookingTours = BookingTour::all();
            return response()->json($bookingTours);
        } catch (Exception $e) {
            Log::error('Error fetching bookings: ' . $e->getMessage());
            return response()->json(['error' => 'Unable to fetch bookings'], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'fullname' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'phone' => 'required|string|max:20',
                'preferences' => 'nullable|array',
                'special_request' => 'nullable|string',
                'payment_method' => 'required|in:cash,bankTransfer',
                'tour_title' => 'required|string|max:255',
                'tour_code' => 'required|string|max:50',
                'departure_date' => 'required|date',
                'guest_count' => 'required|integer|min:1',
                'price_per_guest' => 'required|numeric',
                'total_price' => 'required|numeric',
                'hotline' => 'required|string|max:20',
                'image_url' => 'nullable|string|max:255',
            ]);

            $bookingTour = BookingTour::create($validatedData);

            return response()->json([
                'message' => 'Booking created successfully',
                'booking' => $bookingTour
            ], 201);
        } catch (Exception $e) {
            Log::error('Error creating booking: ' . $e->getMessage());
            return response()->json(['error' => 'Unable to create booking'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $bookingTour = BookingTour::findOrFail($id);
            return response()->json($bookingTour);
        } catch (Exception $e) {
            Log::error('Error fetching booking with ID ' . $id . ': ' . $e->getMessage());
            return response()->json(['error' => 'Booking not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $validatedData = $request->validate([
                'fullname' => 'sometimes|required|string|max:255',
                'email' => 'sometimes|required|email|max:255',
                'phone' => 'sometimes|required|string|max:20',
                'preferences' => 'nullable|array',
                'special_request' => 'nullable|string',
                'payment_method' => 'sometimes|required|in:cash,bankTransfer',
                'tour_title' => 'sometimes|required|string|max:255',
                'tour_code' => 'sometimes|required|string|max:50',
                'departure_date' => 'sometimes|required|date',
                'guest_count' => 'sometimes|required|integer|min:1',
                'price_per_guest' => 'sometimes|required|numeric',
                'total_price' => 'sometimes|required|numeric',
                'hotline' => 'sometimes|required|string|max:20',
                'image_url' => 'nullable|string|max:255',
            ]);

            $bookingTour = BookingTour::findOrFail($id);
            $bookingTour->update($validatedData);

            return response()->json([
                'message' => 'Booking updated successfully',
                'booking' => $bookingTour
            ]);
        } catch (Exception $e) {
            Log::error('Error updating booking with ID ' . $id . ': ' . $e->getMessage());
            return response()->json(['error' => 'Unable to update booking'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $bookingTour = BookingTour::findOrFail($id);
            $bookingTour->delete();

            return response()->json(['message' => 'Booking deleted successfully']);
        } catch (Exception $e) {
            Log::error('Error deleting booking with ID ' . $id . ': ' . $e->getMessage());
            return response()->json(['error' => 'Unable to delete booking'], 500);
        }
    }
}