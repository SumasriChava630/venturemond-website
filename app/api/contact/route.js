<<<<<<< HEAD
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const data = await request.json()
    const { name, email, company, division, service, message, budget, timeline } = data

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: `"Venturemond Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Form Submission - ${division}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Division:</strong> ${division}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Division: ${division}
        Service: ${service}
        Budget: ${budget || 'Not specified'}
        Timeline: ${timeline || 'Not specified'}
        
        Message:
        ${message}
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
=======
export async function POST(req) {
  try {
    const body = await req.json();

    console.log("Received:", body);

    const SHEET_API_URL = process.env.SHEET_API_URL;

    const response = await fetch(SHEET_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        company: body.company,
        division: body.division,
        service: body.service,
        budget: body.budget,
        timeline: body.timeline,
        projectDetails: body.message
      })
    });

    console.log("Sheetbest status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Sheetbest error:", errorText);
      throw new Error(errorText);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
>>>>>>> 8ded54a96397a5f36e757e5e6436b41c359eb694
  }
}
