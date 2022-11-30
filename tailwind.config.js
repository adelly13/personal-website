/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-grey': '#D9DAD5',
      'dark-grey': '#1E1E1E',
      'gold': '#B28C4C',
      'light-pink': '#E0CFBF',
    },
    extend: {},
  },
  fontFamily: {
    gilroy: 'Gilroy, sans-serif',
    inter: 'Inter, sans-serif',
  },
  plugins: [],
}