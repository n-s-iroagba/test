/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRD Brand Colors
        charcoal: '#2F4F4F',
        'sky-blue': '#87CEEB',
        'success-green': '#28a745',
        'error-red': '#dc3545',
      },
      fontFamily: {
        heading: ['Montserrat', 'Arial Black', 'sans-serif'],
        body: ['Open Sans', 'Roboto', 'sans-serif'],
      },
      spacing: {
        // PRD 8px spacing system (keeping Tailwind defaults but adding custom)
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '6': '48px',
        '8': '64px',
      },
      borderRadius: {
        'default': '8px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
