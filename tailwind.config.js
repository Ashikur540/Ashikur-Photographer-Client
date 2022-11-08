/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {

    extend: {
      fontFamily: {
        logoFont: ['Satisfy', 'cursive'],
        textFont: ['Lora', 'serif'],
      },
    },
  },
  plugins: ['tw-elements/dist/plugin'],
}
