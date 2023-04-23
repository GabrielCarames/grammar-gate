/** @type {import('tailwindcss').Config} */
module.exports = {
darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        "black": "#03041A",
        "white:": "#EAEEFF",
        "white-1": "#F4F4F4",
        "white-2": "#DEE2E6",
        "gray-1": "#1B1E2E",
        "gray-2": "#645772",
        "gray-3": "#474A5C",
        "violet-1": "#553A58",
        "violet-2": "#8F7594",
        "violet-3": "#BE95B6",
        "pink-1": "#e94b9a",
        "pink-2": "#bc1d5e",
        "orange-1": "#DC7A6C",
        "orange-2": "#FEB362",
        "yellow-1": "#FFF056",
        "green-1": "#2DC26B",
        "red-1": "#EB4443",
        "blue-1": "#0081D3",
        "text-gray": "#475569"
      }
    },
  },
  plugins: [],
}