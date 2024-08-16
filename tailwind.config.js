/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Gupter":['Gupter'],
        "Oswald":['Oswald'],
        "PT":['PT Sans'],
        "Pfd":['Playfair Display'],
        "Questrial":['Questrial'],
        "Roboto":['Roboto']
      }
    },
  },
  plugins: [],
}

