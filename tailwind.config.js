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
      screens: {
        sm: "358px",
      },
      fontSize: {
        "7xl": [
          "2.125rem",
          {
            lineHeight: "2.8rem",
          },
        ],
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
        backgroundGray: "#ecedee",
      },
    },
  },
  plugins: [],
};
