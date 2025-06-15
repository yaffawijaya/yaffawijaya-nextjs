import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key from the .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Extract the form data from the request
    const { name, email, message, serviceType } = await request.json();

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // This must be a verified domain or this default
      to: ['yaffazka@gmail.com'], // Your email address where you'll receive messages
      subject: `New Portfolio Message: ${serviceType} Inquiry`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
