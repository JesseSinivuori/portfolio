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
        primary: "#050505",
        secondary: "#161616",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        store: "#050505",
        storeSecondary: "#ff7070",
        nav: "#0a0a0a",
      },
      textColor: {
        textLight: "#ffffff",
        textDark: "#000000",
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
