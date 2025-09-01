/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        abril: ['Abril Fatface', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg-cover.svg')",
      },
    },
  },
  plugins: [],
}