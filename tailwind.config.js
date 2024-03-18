/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-background': "url('/src/assets/background-image.jpg')",
      },
      colors: {
        sitebackground: "rgba(var(--site-background))",
        primarytext: "rgba(var(--primary-text))",
        secondarytext: "rgba(var(--secondary-text))",
        gradientstart: "rgba(var(--gradient-start))",
        gradientend: "rgba(var(--gradient-end))",
        normalborder: "rgba(var(--normal-border))",
        hoverborder: "rgba(var(--hover-border))",
        textfooter: "rgba(var(--text-footer))",
        cardbackground:"rgba(var(--card-background))",
      }
    },
  },
  plugins: [],
}

