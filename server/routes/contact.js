// ============================================================
//  Contact Route – POST /api/contact
//  Validates form data and sends email via Nodemailer (Gmail)
// ============================================================

import { Router } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

// ── Nodemailer transporter ───────────────────────────────────
// IMPORTANT: Replace these with real credentials before deploying.
// For Gmail, create an "App Password" at https://myaccount.google.com/apppasswords
// and use it as EMAIL_PASS. Do NOT use your regular Gmail password.
//
// Store credentials in the .env file, never in this source file.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // ← Set in .env: your Gmail address
    pass: process.env.EMAIL_PASS, // ← Set in .env: your Gmail App Password
  },
});

// Email where Ahmad receives enquiries
// IMPORTANT: Replace with the real recipient address or set in .env
const RECEIVER_EMAIL =
  process.env.RECEIVER_EMAIL || 'ahmad.endres@debark.edu.et'; // ← Can be replaced

// ── POST /api/contact ────────────────────────────────────────
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // ── Basic validation ──────────────────────────────────────
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ success: false, message: 'Name is required (min 2 characters).' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'A valid email address is required.' });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return res.status(400).json({ success: false, message: 'Message is required (min 10 characters).' });
  }

  const safeSubject = subject?.trim() || 'General Enquiry';
  const safeMessage = message.trim();
  const safeName = name.trim();
  const safeEmail = email.trim().toLowerCase();

  // ── Build email HTML ──────────────────────────────────────
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body { font-family: 'Inter', Arial, sans-serif; background: #F5F5F5; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .header { background: linear-gradient(135deg, #1B2A4A, #2a3f6b); padding: 30px; text-align: center; }
        .header h1 { color: #D4AF37; font-size: 22px; margin: 0 0 4px; }
        .header p { color: rgba(255,255,255,0.6); font-size: 13px; margin: 0; }
        .body { padding: 30px; }
        .field { margin-bottom: 20px; }
        .field label { display: block; font-size: 11px; font-weight: 700; color: #D4AF37; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
        .field .value { font-size: 15px; color: #333; line-height: 1.6; }
        .message-box { background: #F5F5F5; border-left: 3px solid #D4AF37; padding: 16px; border-radius: 0 8px 8px 0; }
        .footer { background: #1B2A4A; padding: 16px 30px; text-align: center; }
        .footer p { color: rgba(255,255,255,0.4); font-size: 12px; margin: 0; }
        .divider { height: 1px; background: #eee; margin: 4px 0 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Website Enquiry</h1>
          <p>ahmadendreshussen.com</p>
        </div>
        <div class="body">
          <div class="field">
            <label>From</label>
            <div class="value">${safeName}</div>
          </div>
          <div class="divider"></div>
          <div class="field">
            <label>Email</label>
            <div class="value"><a href="mailto:${safeEmail}" style="color:#1B2A4A;">${safeEmail}</a></div>
          </div>
          <div class="divider"></div>
          <div class="field">
            <label>Subject</label>
            <div class="value">${safeSubject}</div>
          </div>
          <div class="divider"></div>
          <div class="field">
            <label>Message</label>
            <div class="message-box value">${safeMessage.replace(/\n/g, '<br />')}</div>
          </div>
        </div>
        <div class="footer">
          <p>Sent via Ahmad Endres Hussen Portfolio Website &bull; ${new Date().toUTCString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // ── Send email ────────────────────────────────────────────
  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: RECEIVER_EMAIL,
      replyTo: safeEmail,
      subject: `[Portfolio] ${safeSubject} – from ${safeName}`,
      html: htmlContent,
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully. Ahmad will get back to you soon.',
    });
  } catch (error) {
    console.error('Nodemailer error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
});

export default router;
