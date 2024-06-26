/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: {
          DEFAULT: '#121415',
          dark: '#121415',
          light: '#1E2022',
        },
        customGreen: {
          DEFAULT: '#151B18',
          dark: '#151B18',
          'light': '#8BFF89',
        },
        customRed: {
          DEFAULT: '#FD2E2E',
          dark: '#FD2E2E',
          light: '#FAFAFA',
        },
        white: colors.white,
        gray: colors.neutral,
      },
    },
    // screens: {
    // 'xl': '340px',
    // }
  },
  plugins: [],
}