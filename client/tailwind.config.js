/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#0d6efd',
        'secondry':'#F0F5FF',
        'tertiary':'#001845',
        'graylight': '#E2E2E2',
        'graydark': '#F5F5F5'
      }
    },
  },
  plugins: [],
}