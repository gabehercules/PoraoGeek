/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#0B0B0B",
        "dark-secondary": "#101010",
        "light-bg": "#161616",
        "brand-green": "#00FF85",
        "dark-border": "#181818",
        "light-text": "#FFFFFF",
        "dark-text": "#676767",

        "light-primary": "#FFFFFF",
      },
      fontFamily: {
        familjenGrotesk: ["Familjen Grotesk"],
        inter: ["Inter"],
      },
      backgroundImage: {
        "hero-login": "url('/public/hero-login.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
