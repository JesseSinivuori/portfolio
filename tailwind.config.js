/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx,css}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "--color-primary",
        light: "var(--color-light)",
        nav: "var(--color-nav)",
        navLight: "var(--color-navLight)",
      },
      textColor: {
        textLightHeading: "white/90",
        textDarkHeading: "black/90",
        textLightParagraph: "white/75",
        textDarkParagraph: "black/75",
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
