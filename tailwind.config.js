/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#131313",
        dimWhite: "rgba(255, 255, 255, 0.75)",
        nav: "#191919",
      },
      textColor: {
        textLight: "#ffffff",
        textDark: "#000000",
      },
      animation: {
        "spin-and-pulse-20s":
          "spin 20s linear infinite, pulse 20s linear infinite",
        "spin-and-pulse-10s":
          "spin 10s linear infinite, pulse 10s linear infinite",
        "spin-and-pulse-10s-reverse":
          "spin 10s linear infinite reverse, pulse 10s linear infinite",
      },
    },
    screens: {
      xss: "375px",
      xs: "480px",
      ss: "620px",
      sm: "800px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
