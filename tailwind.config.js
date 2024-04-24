/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "principal":['"Poppins"', 'Sans Serif']
      },
      colors: {
        "principal":"#febb53;"
      }
    },
  },
  plugins: [],
}

