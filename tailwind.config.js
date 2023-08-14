/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#203863",
          secondary: "#F1F6FF",
        },
        green: {
          primary: "#97D537",
          secondary: "#0D3F05",
        },
      },
      fontFamily: {
        display: ["Philosopher", "sans-serif"],
        baloo: ["'Baloo Thambi 2'", "cursive"],
      },
    },
  },
  plugins: [],
};
