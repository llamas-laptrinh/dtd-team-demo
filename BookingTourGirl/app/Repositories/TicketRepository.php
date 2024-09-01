<?php

namespace App\Repositories;

use App\Models\Ticket;
use App\Interfaces\TicketRepositoryInterface;

class TicketRepository implements TicketRepositoryInterface
{
    /**
     * Get all tickets.
     */
    public function index()
    {
        return Ticket::all();
    }

    /**
     * Get a ticket by its ID.
     */
    public function getById($id)
    {
        return Ticket::findOrFail($id);
    }

    /**
     * Store a new ticket.
     */
    public function store(array $data)
    {
        return Ticket::create([
            'ticket_type' => $data['ticket_type'],
            'event_name' => $data['event_name'],
            'price' => $data['price'],
        ]);
    }

    /**
     * Update an existing ticket.
     */
    public function update(array $data, $id)
    {
        $ticket = Ticket::findOrFail($id);
        $ticket->update([
            'ticket_type' => $data['ticket_type'],
            'event_name' => $data['event_name'],
            'price' => $data['price'],
        ]);
        return $ticket;
    }

    /**
     * Delete a ticket by its ID.
     */
    public function delete($id)
    {
        Ticket::destroy($id);
    }
}
