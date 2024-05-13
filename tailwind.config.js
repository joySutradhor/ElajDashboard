/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        'nunito-light': ['Nunito Light', 'sans-serif'],
        'nunito-bold': ['Nunito Bold', 'sans-serif'],
        'nunito-italic': ['Nunito Italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

