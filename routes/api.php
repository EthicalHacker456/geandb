<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;

Route::post('/contact', function(Request $req){
    // basic validation
    $data = $req->validate([
      'name'=>'required|string',
      'email'=>'required|email',
      'phone'=>'nullable|string',
      'message'=>'required|string'
    ]);

    // simple: log to laravel.log (you can replace with DB store later)
    Log::info('Contact submitted: ' . json_encode($data));

    return response()->json(['message'=>'received'], 201);
});
