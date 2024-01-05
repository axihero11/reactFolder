/** @type {import('tailwindcss').Config} */

// const withMT = require("@material-talwind/react/unitls/withMT")
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
