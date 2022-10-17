/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        fixed: "1fr 2fr",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
