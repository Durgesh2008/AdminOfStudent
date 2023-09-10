/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        s1: ["Inter", "sans-serif"],
        s2:["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}