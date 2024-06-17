<?php

namespace App\Repositories;

use App\Models\Message;

class ChatRepository
{
    public function getUserMessages(int $senterId, int $receiverId)
    {
        return Message::whereIn('sender_id', [$senterId, $receiverId])
            ->whereIn('receiver_id', [$senterId, $receiverId])
            ->get();
    }

    public function sendMessage(array $data)
    {
        return Message::create($data);
    }
}
