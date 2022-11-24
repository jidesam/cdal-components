const colors = require("tailwindcss/colors")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0039A6",
        sideBarText: "#677891",
        grayscaleInput: "#EFF2F6",
        offWhite: "#FCFCFC",
        grayscaleBody: "#4B5466",
        checkbg: "rgba(13, 46, 222, 0.2)",
      }
    },
  },
  plugins: [],
}
