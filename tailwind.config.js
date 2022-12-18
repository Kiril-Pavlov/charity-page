/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extends: {
    },
    colors : {
      primaryColor:'hsla(199, 100%, 93%, 1)'
    },
    fontFamily: {
      primaryFont: ['Inter', 'sans-serif']
    },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
  },
  plugins: [],
}
