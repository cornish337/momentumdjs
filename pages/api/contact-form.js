// pages/api/contact-form.js
import nodemailer from 'nodemailer';

// Helper function for basic email validation
const isValidEmail = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { name, email, phone, eventDate, eventType, message } = req.body;

  // --- Server-side validation ---
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ message: 'Full name is required.' });
  }
  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    return res.status(400).json({ message: 'A valid email address is required.' });
  }
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ message: 'Message is required.' });
  }

  // Optional fields validation (basic type checks if provided)
  if (phone && typeof phone !== 'string') {
    return res.status(400).json({ message: 'Invalid phone number format.' });
  }
  if (eventDate) {
    if (typeof eventDate !== 'string' || isNaN(Date.parse(eventDate))) {
        return res.status(400).json({ message: 'Invalid event date format.' });
    }
  }
  if (eventType && typeof eventType !== 'string') {
    return res.status(400).json({ message: 'Invalid event type format.' });
  }
  // --- End server-side validation ---

  // Configure Nodemailer transporter
  // IMPORTANT: These environment variables MUST be set in a .env.local file
  // Create a .env.local file in the root of your project and add:
  // EMAIL_SERVICE=your_email_service_provider (e.g., 'gmail', 'hotmail', 'outlook365') - often optional if using a common one like gmail
  // EMAIL_HOST=your_smtp_host (e.g., 'smtp.gmail.com') - often optional
  // EMAIL_PORT=your_smtp_port (e.g., 587 or 465) - often optional
  // EMAIL_SECURE=true_or_false (true for 465, false for 587) - often optional
  // EMAIL_USER=your_sending_email_address@example.com
  // EMAIL_PASS=your_email_password_or_app_password
  // ADMIN_EMAIL=recipient_email_for_inquiries@example.com

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
    host: process.env.EMAIL_HOST, // Optional, often inferred by service
    port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT, 10) : 587, // Optional
    secure: process.env.EMAIL_SECURE === 'true', // Optional, true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Momentum DJs Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL, // The email address that will receive the form submissions
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${eventDate ? `<p><strong>Event Date:</strong> ${new Date(eventDate).toLocaleDateString()}</p>` : ''}
        ${eventType ? `<p><strong>Event Type:</strong> ${eventType}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 10px; border-radius: 4px;">${message}</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 0.9em; color: #777;">This email was sent from the contact form on the Momentum DJs website.</p>
      </div>
    `,
  };

  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.ADMIN_EMAIL) {
      console.error("Email environment variables are not set. Email cannot be sent.");
      // This specific error is more for the server log. 
      // For the client, we might want a more generic "server error" unless we want to expose this.
      // However, for now, letting it fall through to the generic 500 error is acceptable.
      throw new Error("Email server configuration incomplete.");
    }
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    // Log the detailed error on the server
    let clientErrorMessage = 'Failed to send message due to a server error.';
    if (error.message === "Email server configuration incomplete.") {
        clientErrorMessage = "Cannot send email: Email service is not configured on the server. Please contact site admin.";
    } else if (error.code === 'EENVELOPE' || error.code === 'EAUTH') {
        clientErrorMessage = "Cannot send email: Server authentication error or invalid recipient. Please contact site admin.";
    }
    
    return res.status(500).json({ message: clientErrorMessage, details: error.message });
  }
}
