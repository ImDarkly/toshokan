
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
    themes: {
      light: {
        colors: {
          primary: {
            50: '#ddf6ff',
            100: '#b0deff',
            200: '#82c6fb',
            300: '#53aff7',
            400: '#2598f3',
            500: '#0c7fda',
            600: '#0062aa',
            700: '#00467b',
            800: '#002a4d',
            900: '#000f1f',
          },
          secondary: 
          {
            50: '#e8f3ff',
            100: '#d0d8e4',
            200: '#b3bdcd',
            300: '#96a3b5',
            400: '#7a899f',
            500: '#606f85',
            600: '#4a5769',
            700: '#333e4c',
            800: '#1d2530',
            900: '#070c18',
          }
        }
      }
    }
  })],
};
