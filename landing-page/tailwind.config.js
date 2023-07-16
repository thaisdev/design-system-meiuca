/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1366px",
      xl: "1440px",
    },
    extend: {
      spacing: {
        1: "8px",
        2: "16px",
      },
    },
  },
  plugins: [],
};
