/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        bgdasar: "#1AC8C8",
        hitam: "#3E3E3D",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
