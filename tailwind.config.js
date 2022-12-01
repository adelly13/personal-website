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
      'grey': '#858182',
    },
    extend: {},
  },
  fontFamily: {
    opensans: 'Open Sans',
  },
  plugins: [],
}