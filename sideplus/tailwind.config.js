/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roc:["var(--font-roc-grotesk)"],
        sans: ["var(--font-opensans)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundSize:{
        auto:"auto",
        cover:"cover",
        contain:"contain",
        large:"120%",
        fit:"100%"
      }
    },
  },
  plugins: [],
};
