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
          "3rem",
          {
            lineHeight: "3.5rem",
          },
        ],
      },
      screens: {
        xs: "640px",
        xxs: "358px",
      },
      colors: {
        java: "#00DDDE",
        green: "#00997E",
        midnight: "#1D2A35",
        black: "#1D2A35",
        white: "#f7f8fc",
        gray: "#49525a",
        slateblue: "#6871fe",
        darkblue: "#1F224C",
        bluenavy: "#34397f",
        buttontextcolor: "#49EAFE",
      },
    },
  },
  plugins: [],
};
