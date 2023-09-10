/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkViolet: "#2D2641",
      grayishBlue: "#96A9C6",
      veryDarkViolet: "#2C2830",
      darkGrayishViolet: "#837D88",
      veryLightGray: "#FAFAFA",
      dadada: "#DADADA;"
    },
    width: {
      appWidth: "90rem"
    },
    extend: {
      maxWidth: {
        "7xl": "90rem"
      },
     
      keyframes:{
        "open-menu": {
          "0%": {transform: "scaleY(0)"},
          "80%": {transform: "scaleY(1.2)"},
          "100%": {transform: "scaleY(1)"},
        }
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards"
      },
      fontFamily: {
        "Karla": ['Karla', "sans-serif"],
        "DM-Serif" : ['DM Serif Display', "serif"]
      }
    },
  },
  plugins: [],
}