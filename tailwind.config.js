/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#353dff",
        neutral: "#717171",
      },
      fontSize: {
        xs: "0.813rem", // 13px
        sm: "0.938rem", // 15px
        base: "1.063rem", // 17px
        "4xl": "2.125rem",
      },
      letterSpacing: {
        wide: "0.009rem", // 0.15px
        wider: "0.016rem", // 0.25px
        widest: "0.025rem", // 0.4px
      },
    },
  },
  plugins: [],
};
