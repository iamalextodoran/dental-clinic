/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF0000",
        },
        danube: {
          DEFAULT: "#6DA9D9",
          50: "#FFFFFF",
          100: "#EEF5FB",
          200: "#CEE2F2",
          300: "#AECFEA",
          400: "#8DBCE1",
          500: "#6DA9D9",
          600: "#408FCD",
          700: "#2C72AA",
          800: "#21547D",
          900: "#153651",
        },
      },
    },
  },
  plugins: [],
};
