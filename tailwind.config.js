/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'favorite': '#F85E9F',
        'purple1' : '#5D50C6',
        'favorite-back':'#fcece8'
      },
      backdropBlur: {
        xs: '6px',
      },
    },
  },
  plugins: [],
}