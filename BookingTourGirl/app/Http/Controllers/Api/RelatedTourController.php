<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RelatedTour;
use Illuminate\Http\Request;

class RelatedTourController extends Controller
{
    public function index()
    {
        try {
            $relatedTours = RelatedTour::all();
            return response()->json($relatedTours, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error fetching related tours',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $relatedTour = RelatedTour::findOrFail($id);
            return response()->json($relatedTour, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error fetching related tour',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'relatedimage' => 'required|array',
            'relatedimage.*' => 'url', 
            'price' => 'required|string|max:255',
            'departure' => 'required|string|max:255',
        ]);

        try {
            $relatedTour = RelatedTour::create($request->all());
            return response()->json($relatedTour, 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error creating related tour',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'sometimes|string|max:255',
            'relatedimage' => 'sometimes|array',
            'relatedimage.*' => 'url',
            'price' => 'sometimes|string|max:255',
            'departure' => 'sometimes|string|max:255',
        ]);

        try {
            $relatedTour = RelatedTour::findOrFail($id);
            $relatedTour->update($request->all());
            return response()->json($relatedTour, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error updating related tour',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $relatedTour = RelatedTour::findOrFail($id);
            $relatedTour->delete();
            return response()->json(['message' => 'Related tour deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error deleting related tour',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
