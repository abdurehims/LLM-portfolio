// ============================================================
//  Ahmad Endres Hussen Portfolio – Backend Server
//  Node.js + Express + Nodemailer
// ============================================================

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoute from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────────
app.use(express.json());
app.use(
  cors({
    // Set this to your deployed frontend URL in production, e.g.:
    // origin: 'https://ahmadendres.com',
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

// ── Routes ──────────────────────────────────────────────────
app.use('/api/contact', contactRoute);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Ahmad Portfolio API is running.' });
});

// ── Start ───────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Server running on http://localhost:${PORT}`);
});
