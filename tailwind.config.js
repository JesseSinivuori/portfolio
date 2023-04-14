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
        primary: "#0a0a0a",
        secondary: "#161616",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        store: "#040404",
        storeSecondary: "#ff7070",
        nav: "#0f0f0f",
      },
      textColor: {
        textLight: "#ffffff",
        textDark: "#000000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        display: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
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
