/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B2A4A',
        gold: '#D4AF37',
        green: '#2E8B57',
        background: '#F5F5F5',
        card: '#FFFFFF',
        text: '#333333',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease forwards',
        fadeIn: 'fadeIn 0.6s ease forwards',
      },
    },
  },
  plugins: [],
};
