<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class OrderController extends Controller
{
    // Create a new order
    public function store(Request $request)
    {
        try {
            $this->validateOrder($request);

            $orderCode = strtoupper(Str::random(4)) . mt_rand(1000, 9999);
            $order = Order::create([
                'order_code' => $orderCode,
                'full_name' => $request->full_name,
                'phone_number' => $request->phone_number,
                'email' => $request->email,
                'tour_code' => $request->tour_code,
                'departure_date' => $request->departure_date,
                'guest_count' => $request->guest_count,
                'payment_method' => $request->payment_method,
                'total_amount' => $request->total_amount,
            ]);

            return response()->json(['order' => $order], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while creating the order',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Retrieve a single order by ID
    public function show($id)
    {
        try {
            $order = Order::findOrFail($id);
            return response()->json(['order' => $order], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Order not found'], 404);
        }
    }

    // Retrieve all orders
    public function index()
    {
        try {
            $orders = Order::all();
            return response()->json(['orders' => $orders], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while retrieving orders',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Update an existing order
    public function update(Request $request, $id)
    {
        try {
            $this->validateOrder($request);

            $order = Order::findOrFail($id);
            $order->update($request->all());

            return response()->json(['order' => $order], 200);

        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while updating the order',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Delete an order
    public function destroy($id)
    {
        try {
            $order = Order::findOrFail($id);
            $order->delete();

            return response()->json(['message' => 'Order deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Order not found'], 404);
        }
    }

    // Validation logic for data
    protected function validateOrder(Request $request)
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'phone_number' => 'required|string|size:10|regex:/^[0-9]{10}$/',
            'email' => 'required|email|max:255',
            'tour_code' => 'required|string|max:255',
            'departure_date' => 'required|date|after_or_equal:today',
            'guest_count' => 'required|integer|min:1',
            'payment_method' => 'required|string|max:255',
            'total_amount' => 'required|numeric|min:0',
        ]);
    }
}
