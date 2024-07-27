<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tour;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class TourController extends Controller
{
    public function index()
    {
        try {
            $tours = Tour::all();
            return response()->json($tours, 200);
        } catch (\Exception $e) {
            Log::error('Error fetching tours: ' . $e->getMessage());
            return response()->json(['message' => 'Error fetching tours', 'error' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        try {
            $tour = Tour::findOrFail($id);
            return response()->json($tour, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Tour not found', 'error' => $e->getMessage()], 404);
        } catch (\Exception $e) {
            Log::error('Error fetching tour: ' . $e->getMessage());
            return response()->json(['message' => 'Error fetching tour', 'error' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'imagedetail' => 'required|array',
            'location' => 'required|string',
            'duration' => 'required|string',
            'code' => 'required|string',
            'departure_dates' => 'required|array',
            'transport' => 'required|string',
            'highlights' => 'required|array',
            'description' => 'required|string',
            'contact_info' => 'required|string',
            'tour_program' => 'required|string',
            'services_included' => 'required|string',
            'regulations' => 'required|string',
            'original_price' => 'required|numeric',
            'discounted_price' => 'required|numeric',
            'departure_date' => 'required|date',
            'guest_count' => 'required|string',
            'hotline_number' => 'required|string',
        ]);

        try {
            $tour = Tour::create($request->all());
            return response()->json($tour, 201);
        } catch (\Exception $e) {
            Log::error('Error creating tour: ' . $e->getMessage());
            return response()->json(['message' => 'Error creating tour', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $tour = Tour::findOrFail($id);
            $tour->update($request->all());
            return response()->json($tour, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Tour not found', 'error' => $e->getMessage()], 404);
        } catch (\Exception $e) {
            Log::error('Error updating tour: ' . $e->getMessage());
            return response()->json(['message' => 'Error updating tour', 'error' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $tour = Tour::findOrFail($id);
            $tour->delete();
            return response()->json(['message' => 'Tour deleted successfully'], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Tour not found', 'error' => $e->getMessage()], 404);
        } catch (\Exception $e) {
            Log::error('Error deleting tour: ' . $e->getMessage());
            return response()->json(['message' => 'Error deleting tour', 'error' => $e->getMessage()], 500);
        }
    }
}
