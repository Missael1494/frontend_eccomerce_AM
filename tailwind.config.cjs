// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html", "./src/**/*.jsx",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {
      backgroundImage: {
        'carousel-1': "url('/images/carousel/carousel-1.png ')",
        'carousel-2': "url('/images/carousel/carousel-2.png ')",
        'carousel-3': "url('/images/carousel/carousel-3.png ')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
