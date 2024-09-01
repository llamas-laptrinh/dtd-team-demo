<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use App\Http\Requests\StoreTicketRequest;
use App\Http\Requests\UpdateTicketRequest;
use App\Interfaces\TicketRepositoryInterface;
use App\Classes\ApiResponseClass;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    private TicketRepositoryInterface $ticketRepositoryInterface;

    public function __construct(TicketRepositoryInterface $ticketRepositoryInterface)
    {
        $this->ticketRepositoryInterface = $ticketRepositoryInterface;
    }

    public function index()
    {
        //
        $data = $this->ticketRepositoryInterface->index();
        return ApiResponseClass::sendResponse($data, '', 200);
    }

    // public function getAllUserTickets()
    // {
    //     $data = auth()->user();
    //     $data = $this->ticketRepositoryInterface->index($data->id);
    //     return ApiResponseClass::sendResponse($data, '', 200);
    // }

    // public function getAllUserTicketsByEvent()
    // {
    //     $data = auth()->user();
    //     $data = $this->ticketRepositoryInterface->getAllUserTicketsByEvent($data->id);
    //     return ApiResponseClass::sendResponse($data, '', 200);
    // }

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
    public function store(StoreTicketRequest $request)
    {
        //
        $data = auth()->user();
        $details = [
            'ticket_type' => $request->ticket_type,
            'event_name' => $request->event_name,
            'price' => $request->price,
        ];

        DB::beginTransaction();
        try {
            $ticket = $this->ticketRepositoryInterface->store($details);
            DB::commit();
            return ApiResponseClass::sendResponse($ticket, 'Save ticket successful', 201);

        } catch (\Exception $ex) {
            return ApiResponseClass::rollback($ex);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Ticket $ticket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ticket $ticket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTicketRequest $request, Ticket $ticket)
{
    $details = [
        'ticket_type' => $request->ticket_type,
        'event_name' => $request->event_name,
        'price' => $request->price,
    ];

    DB::beginTransaction();
    try {
        $updatedTicket = $this->ticketRepositoryInterface->update($details, $ticket->id);
        DB::commit();
        return ApiResponseClass::sendResponse($updatedTicket, 'Update ticket successful', 200);

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
        //
        $data = $this->ticketRepositoryInterface->delete($id);
        return ApiResponseClass::sendResponse($data, 'Ticket delete successful', 200);
    }

    public function deleteAndGetTicketsByEvent($id)
    {
        //
        $data = $this->ticketRepositoryInterface->deleteAndGetTicketsByEvent($id);
        return ApiResponseClass::sendResponse($data, 'Ticket delete successful', 200);
    }
}
