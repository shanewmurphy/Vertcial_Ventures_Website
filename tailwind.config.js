/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      fontSize: {
        display: [
          "3.75rem",
          {
            lineHeight: "5rem",
          },
        ],
      },
      screens: {
        xs: "640px",
        xxs: "425px",
      },
      colors: {
        java: "#00DDDE",
        green: "#00997E",
        midnight: "#1D2A35",
        black: "#1D2A35",
        white: "#f7f8fc",
        gray: "#49525a",
        slateblue: "#6871fe",
      },
    },
  },
  plugins: [],
};
