<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Mail;

Route::get('/', function () {
    return view('welcome');
});



Route::get('/products', [CategoryController::class, 'getProducts']);
Route::post('/contact', [ContactController::class, 'store']);


Route::get('/check-env', function () {
    return [
        'SLACK_WEBHOOK_URL' => env('SLACK_WEBHOOK_URL') ? 'SET ✅' : 'NOT SET ❌',
        'OWNER_EMAIL' => env('OWNER_EMAIL') ?: 'NOT SET ❌',
        'MAIL_MAILER' => env('MAIL_MAILER'),
        'MAIL_HOST' => env('MAIL_HOST'),
        'MAIL_USERNAME' => env('MAIL_USERNAME') ? 'SET ✅' : 'NOT SET ❌',
    ];
});

Route::get('/test-email', function () {
    try {
        Mail::raw('Test email from Laravel', function ($message) {
            $message->to(env('OWNER_EMAIL'))
                    ->subject('Test Email');
        });
        
        return 'Email sent! Check ' . env('OWNER_EMAIL');
    } catch (\Exception $e) {
        return 'Error: ' . $e->getMessage();
    }
});
