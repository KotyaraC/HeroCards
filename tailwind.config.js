/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#1A202C',
        primary: '#F59E0B',
        secondary: '#1D4ED8',
        border: '#F59E0B',
      },
      fontSize: {
        title: '3xl',
        subtitle: 'xl',
      },
      spacing: {
        '72': '18rem',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
};
