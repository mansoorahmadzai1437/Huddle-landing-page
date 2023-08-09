/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '1000px',
        xl: '1440px',
      },
      colors: {
        // Primary
        pink: 'hsl(322, 100%, 66%)',
        // Neutral
        veryPaleCyan: 'hsl(193, 100%, 96%)',
        veryDarkCyan: 'hsl(192, 100%, 9%)',
        grayishBlue: 'hsl(208, 11%, 55%)',
      },
      fontFamily: {
        sansHeading: ['Poppins', 'sans-serif'],
        sansBody: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'box': '0 0px 20px 1px rgba(0, 0, 0, 0.08)',
        'box-desktop': '0 0px 10px 1px rgba(0, 0, 0, 0.07)',
        'button': '0 2px 10px 1px rgba(0, 0, 0, 0.1)',
        'button-desktop': '0 2px 10px 1px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}


