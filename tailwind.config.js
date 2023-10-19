/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": ["0 10px 25px rgba(0, 0, 0, 1)", "0 0 25px rgba(0, 0, 0, 1)"],
        "4xl": ["0px 3px 4px #000000", "0px 3px 5px #333333"],
      },
      borderRadius: {
        "4xl": "25%",
      },
      boxShadow: {
        "3xl": "0px 0px 79px 46px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
