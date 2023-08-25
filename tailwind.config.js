/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        primary: "hsl(229, 23%, 23%)",
        secondary: "hsl(227, 10%, 46%)",
        rear: "hsl(185, 75%, 39%)",
      },
      backgroundImage: {
        "pattern-card": "url('./images/bg-pattern-card.svg')",
      },
    },
  },
  plugins: [],
};
