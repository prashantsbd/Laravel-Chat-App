<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Repositories\ChatRepository;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function __construct(private ChatRepository $chat) {
        $this->chat = $chat;
    }

    // chata view
    public function index(Request $request, ?int $receiverId = null): Response
    {
        $messages = empty($receiverId) ? [] : $this->chat->getUserMessages($request->user()->id, $receiverId);
        return Inertia::render('Chat/Chat', [
            'messages' => $messages,
        ]);
    }

    // chata store
    public function store(Request $request, ?int $receiverId = null)
    {
        $request->validate([
            'message' => 'required|string',
        ]);

        if(empty($receiverId)){
            return;
        }
        try{
            $message = $this->chat->sendMessage([
                'sender_id' => (int) $request->user()->id,
                'receiver_id' => $receiverId,
                'message' => $request->message,
            ]);

            event(New MessageSent($message));

            return Redirect::route('chat.index', $receiverId);
        } catch(\Throwable $th){
            return Redirect::route('chat.index', $receiverId);
        }
    }
}
