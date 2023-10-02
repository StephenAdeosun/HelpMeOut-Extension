/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grayTransParent: "rgba(98, 98, 98, 0.17)",
        red: "#C00404",
      },
      fontFamily: {
        inter: ["Inter", "snas-serif"],
      },
    },
  },
  plugins: [],
};
