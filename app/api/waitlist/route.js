import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const data = await request.json()
    const { name, email, company, teamSize, reason } = data

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: `"Venturemond Workspace Waitlist" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: 'New Workspace Waitlist Signup ☁️',
      html: `
        <h2>New Workspace Waitlist Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Team Size:</strong> ${teamSize || 'Not specified'}</p>
        <p><strong>Reason for Interest:</strong></p>
        <p>${reason || 'Not provided'}</p>
      `,
      text: `
        New Workspace Waitlist Signup
        
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Team Size: ${teamSize || 'Not specified'}
        
        Reason for Interest:
        ${reason || 'Not provided'}
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Waitlist signup successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to process waitlist signup' },
      { status: 500 }
    )
  }
}
