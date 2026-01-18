import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact API Route
 * Handles contact form submissions
 * Following security best practices
 */

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize input to prevent XSS
 */
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
}

/**
 * POST handler for contact form
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: ContactRequestBody = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const name = sanitizeInput(body.name);
    const email = sanitizeInput(body.email);
    const message = sanitizeInput(body.message);

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate lengths
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 1000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 1000 characters' },
        { status: 400 }
      );
    }

    // Send email via Web3Forms (free email service)
    // To use: Sign up at https://web3forms.com and get your access key
    // Set WEB3FORMS_ACCESS_KEY in .env.local
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (accessKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: 'New Contact Form Submission from BudGo.Net',
            from_name: name,
            email: email,
            message: message,
            // Optional: Custom redirect
            redirect: process.env.NEXT_PUBLIC_SITE_URL || 'https://budgo.net'
          })
        });

        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.message || 'Email service failed');
        }
      } catch (emailError) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Email sending failed:', emailError);
        }
        // Don't fail the request if email fails, just log it
      }
    }
    
    // Log only in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', {
        name,
        email,
        message: message.substring(0, 100) + '...',
        timestamp: new Date().toISOString(),
      });
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for your message. We will get back to you soon!' 
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Contact form error:', error);
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * Only allow POST requests
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}


