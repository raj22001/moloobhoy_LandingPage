/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        optima: ["Optima LT W02 Roman", "OptimaRoman", "sans-serif"],
      },
      screens: {
        mobile: "220px",
      },
    },
  },
  plugins: [],
};
