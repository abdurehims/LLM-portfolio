<<<<<<< HEAD
# Ahmad Endres Hussen – Portfolio Website

A fully responsive, professional portfolio for **Ahmad Endres Hussen**, Ethiopian maritime law expert, lecturer, and legal consultant.

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React 19 + Vite + Tailwind CSS    |
| Backend   | Node.js + Express                 |
| Email     | Nodemailer (Gmail SMTP)           |
| Animations| AOS (Animate On Scroll)           |
| Icons     | Lucide React                      |
| HTTP      | Axios                             |

---

## Project Structure

```
ahmad-portfolio/
├── public/
│   └── ahmad-portrait.jpg       ← Add Ahmad's photo here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Expertise.jsx
│   │   ├── Education.jsx
│   │   ├── Publications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   ├── routes/
│   │   └── contact.js            ← Email handler
│   ├── index.js                  ← Express entry point
│   ├── package.json
│   └── .env                      ← Gmail credentials (DO NOT COMMIT)
├── .env                          ← Frontend env (VITE_BACKEND_URL)
├── .gitignore
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## Quick Start

### 1. Frontend

```bash
# From the ahmad-portfolio root
npm install
npm run dev        # → http://localhost:5173
```

### 2. Backend

```bash
# From the server folder
cd server
npm install

# Edit server/.env and fill in your credentials:
# EMAIL_USER=your-gmail@gmail.com
# EMAIL_PASS=your-app-password

npm run dev        # → http://localhost:5000
```

---

## Gmail App Password Setup

1. Enable 2-Step Verification on your Google account.
2. Go to https://myaccount.google.com/apppasswords
3. Create a new App Password (select "Mail" + "Other").
4. Copy the 16-character password into `server/.env` as `EMAIL_PASS`.

---

## Add Ahmad's Portrait

Place a photo named `ahmad-portrait.jpg` inside the `public/` folder.
It will automatically appear in the Hero section with a gold border.

---

## Deployment

### Frontend → Vercel / Netlify
```bash
npm run build
# Deploy the dist/ folder
# Set VITE_BACKEND_URL=https://your-backend.onrender.com in dashboard env vars
```

### Backend → Render / Railway
- Set root directory to `server/`
- Start command: `node index.js`
- Add environment variables: EMAIL_USER, EMAIL_PASS, RECEIVER_EMAIL, FRONTEND_URL

---

## Color Palette

| Token       | Hex       |
|-------------|-----------|
| Primary     | `#1B2A4A` |
| Gold Accent | `#D4AF37` |
| Green       | `#2E8B57` |
| Background  | `#F5F5F5` |
| Cards       | `#FFFFFF` |
| Text        | `#333333` |
=======
# LLM-portfolio
>>>>>>> 6de9234a12496cf5a7e9dec78d8eb82140931979
