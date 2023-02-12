/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      white: "#fff",
      lightgray: "hsl(212, 45%, 89%)",
      grayblue: "hsl(220, 15%, 55%)",
      darkblue: "hsl(218, 44%, 22%)",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    fontSize: {
      base: "15px",
    },
    extend: {},
  },
  plugins: [],
};
