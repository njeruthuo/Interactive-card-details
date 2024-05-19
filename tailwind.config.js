/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        red: "hsl(0, 100%, 66%)",
        veryDarkViolet: "hsl(278, 68%, 11%)",
        darkGrayishViolet: "hsl(279, 6%, 55%)",
        lightGrayishViolet: "hsl(270, 3%, 87%)",
        linearGradient: "hsl(249, 99%, 64%) to hsl(278, 94%, 30%)",
      },
    },
  },
  plugins: [],
};
