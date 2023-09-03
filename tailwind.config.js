/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      londrina:'Londrina Outline'
    },

    extend: {
      colors:{
        primary:'#191B27',
        secondary:'#FFD2E4',
        third:'#C3003C'
      }
    },
  },
  plugins: [],
}