/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      stone: colors.stone,
      neutral: colors.neutral,
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      rose: colors.rose,
      red: colors.red,
      "polar-green": {
        50: "#f6ffed",
        100: "#d9f7be",
        200: "#b7eb8f",
        300: "#95de64",
        400: "#73d13d",
        500: "#52c41a",
        600: "#389e0d",
        700: "#237804",
        800: "#135200",
        900: "#092b00",
      },
    },
  },
  extend: {},
  plugins: [],
};
