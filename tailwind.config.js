/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#1B1E2E",
        "white:": "#EAEEFF",
        "gray-1": "#3D3950",
        "gray-2": "#645772",
        "violet-1": "#553A58",
        "violet-2": "#8F7594",
        "violet-3": "#BE95B6",
        "pink-1": "#BE60BC",
        "pink-2": "#9F4398",
        "orange-1": "#DC7A6C",
        "orange-2": "#FEB362",
        "yellow-1": "#F9F871",
      }
    },
  },
  plugins: [],
}