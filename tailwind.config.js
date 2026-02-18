/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gdgBlue: "#4285F4",
        gdgRed: "#EA4335",
        gdgYellow: "#FBBC05",
        gdgGreen: "#34A853",
      },
    },
  },
  plugins: [],
}
