<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #1a1a1a;
            color: white;
            padding: 30px;
            text-align: center;
        }
        .content {
            padding: 30px;
        }
        .field {
            margin-bottom: 20px;
        }
        .label {
            font-weight: bold;
            color: #666;
            margin-bottom: 5px;
            display: block;
        }
        .value {
            color: #333;
            font-size: 16px;
        }
        .message-box {
            background-color: #f5f5f5;
            padding: 15px;
            border-left: 4px solid #DAA520;
            margin-top: 10px;
            white-space: pre-wrap;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 New Contact Inquiry</h1>
            <p>GE&B Website</p>
        </div>
        <div class="content">
            <p>You have received a new contact form submission:</p>
            
            <div class="field">
                <span class="label">👤 Name:</span>
                <span class="value">{{ $contact->name }}</span>
            </div>

            <div class="field">
                <span class="label">📧 Email:</span>
                <span class="value">
                    <a href="mailto:{{ $contact->email }}">{{ $contact->email }}</a>
                </span>
            </div>

            @if($contact->phone)
            <div class="field">
                <span class="label">📞 Phone:</span>
                <span class="value">
                    <a href="tel:{{ $contact->phone }}">{{ $contact->phone }}</a>
                </span>
            </div>
            @endif

            <div class="field">
                <span class="label">💬 Message:</span>
                <div class="message-box">{{ $contact->message }}</div>
            </div>

            <div class="field">
                <span class="label">🕐 Submitted At:</span>
                <span class="value">{{ $contact->created_at->format('F j, Y - g:i A') }}</span>
            </div>
        </div>
    </div>
</body>
</html>