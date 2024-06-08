<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class ChatController extends Controller
{

    // chata view
    public function index(): Response
    {
        return Inertia::render('Chat/Chat');
    }
}
