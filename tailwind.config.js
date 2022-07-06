/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00DBDE",
        secondary: "#FC00FF",
        // tertiary: "#2B86C5" 
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"]
      }
    },
  },
  plugins: [],
}

