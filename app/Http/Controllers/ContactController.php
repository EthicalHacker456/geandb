<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Mail\ContactFormSubmitted;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'message' => 'required|string|max:5000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            // Save contact to database
            $contact = Contact::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'message' => $request->message,
            ]);

            // Send email notification to owner (if configured)
            try {
                Mail::to(env('OWNER_EMAIL', 'Info@genb.com.au'))
                    ->send(new ContactFormSubmitted($contact));
            } catch (\Exception $e) {
                Log::error('Email failed: ' . $e->getMessage());
            }

            // Send Slack notification (instant alert!)
            $this->sendSlackNotification($contact);

            return response()->json([
                'success' => true,
                'message' => 'Thank you for contacting us! We will get back to you soon.'
            ], 200);

        } catch (\Exception $e) {
            Log::error('Contact form error: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong. Please try again later.'
            ], 500);
        }
    }

    /**
     * Send formatted notification to Slack
     */
    private function sendSlackNotification($contact)
    {
        $webhookUrl = env('SLACK_WEBHOOK_URL');
        
        // Skip if webhook not configured
        if (!$webhookUrl) {
            Log::info('Slack webhook not configured');
            return;
        }

        $message = [
            'text' => '🔔 New Contact Form Submission!',
            'blocks' => [
                // Header
                [
                    'type' => 'header',
                    'text' => [
                        'type' => 'plain_text',
                        'text' => '📧 New Contact Inquiry - GE&B',
                        'emoji' => true
                    ]
                ],
                
                // Contact Details
                [
                    'type' => 'section',
                    'fields' => [
                        [
                            'type' => 'mrkdwn',
                            'text' => "*👤 Name:*\n{$contact->name}"
                        ],
                        [
                            'type' => 'mrkdwn',
                            'text' => "*📧 Email:*\n{$contact->email}"
                        ],
                        [
                            'type' => 'mrkdwn',
                            'text' => "*📞 Phone:*\n" . ($contact->phone ?: '_Not provided_')
                        ],
                        [
                            'type' => 'mrkdwn',
                            'text' => "*🕐 Time:*\n{$contact->created_at->format('M j, Y - g:i A')}"
                        ]
                    ]
                ],
                
                // Message
                [
                    'type' => 'section',
                    'text' => [
                        'type' => 'mrkdwn',
                        'text' => "*💬 Message:*\n```{$contact->message}```"
                    ]
                ],
                
                // Divider
                [
                    'type' => 'divider'
                ],
                
                // Quick Actions
                [
                    'type' => 'context',
                    'elements' => [
                        [
                            'type' => 'mrkdwn',
                            'text' => "💡 *Quick Reply:* <mailto:{$contact->email}|Send Email> | <tel:{$contact->phone}|Call Now>"
                        ]
                    ]
                ]
            ]
        ];

        try {
            $response = Http::post($webhookUrl, $message);
            
            if ($response->successful()) {
                Log::info('Slack notification sent successfully');
            } else {
                Log::error('Slack notification failed: ' . $response->body());
            }
        } catch (\Exception $e) {
            Log::error('Slack notification error: ' . $e->getMessage());
        }
    }
}