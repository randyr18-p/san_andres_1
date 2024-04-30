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
      },
      screens: {
        'xs': '450px',  // Punto de interrupción adicional para 450px
        'sm': '640px',  // Estándar para 'sm' pero puedes ajustarlo
        'md': '768px',  // Estándar para 'md'
        'md-lg': '900px',  // Punto de interrupción adicional para 900px
        'lg': '1024px',  // Estándar para 'lg'
        'xl': '1280px',  // Estándar para 'xl'
        '2xl': '1536px',  // Estándar para '2xl'
      },
    },
  },
  plugins: [],
}

