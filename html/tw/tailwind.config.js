/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {

    extend: {
      colors: {
        primary: '#3333ff',
        danger: '#ff3333'  
      },                 /* 얘네 extend 바깥에 뒀다가 둘말고 다른색은 인식 못했다.. */
      fontsize: {
        big: '200px',
      }
    },
  },
  plugins: [],
};

