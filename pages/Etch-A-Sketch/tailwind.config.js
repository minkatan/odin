/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      cursor: {
        'wand': 'url(cursor.cur), default',
      }
    },
  },
  plugins: [],
}