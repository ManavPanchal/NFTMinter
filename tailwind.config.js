/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "32rem",
      },
      height: {
        128: "32rem",
      },
      margin: {
        128: "32rem",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
