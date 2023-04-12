/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      green: colors.green,
      white: colors.white,
      red: colors.red,
      blue: colors.blue,
      black: colors.black,
      gray: colors.gray,
      "dark-line": "#393C49",
      formBg: "#2D303E",
      "light-text": "#ABBBC2",
      primaryText: ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgba(var(--primary-text), ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
          return `rgba(var(--primary-text), var(${opacityVariable}, 1))`;
        }
        return 'rgba(var(--primary-text), 1)';
      },
      secondaryText: ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgba(var(--secondary-text), ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
          return `rgba(var(--secondary-text), var(${opacityVariable}, 1))`;
        }
        return 'rgba(var(--secondary-text), 1)';
      },
      accentText: ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgba(var(--accent-text), ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
          return `rgba(var(--accent-text), var(${opacityVariable}, 1))`;
        }
        return 'rgba(var(--accent-text), 1)';
      },
      accent: ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgba(var(--accent), ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
          return `rgba(var(--accent), var(${opacityVariable}, 1))`;
        }
        return 'rgba(var(--accent), 1)';
      },

      primaryBg: ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgba(var(--primary-bg), ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
          return `rgba(var(--primary-bg), var(${opacityVariable}, 1))`;
        }
        return 'rgba(var(--primary-bg), 1)';
      },
      secondaryBg: ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgba(var(--secondary-bg), ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
          return `rgba(var(--secondary-bg), var(${opacityVariable}, 1))`;
        }
        return 'rgba(var(--secondary-bg), 1)';
      },
      tertiary: ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgba(var(--tertiary), ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
          return `rgba(var(--tertiary), var(${opacityVariable}, 1))`;
        }
        return 'rgba(var(--tertiary), 1)';
      },
      lighter: '#E0E6E9',
      light: '#ABBBC2',
    },
    extend: {},
  },
  plugins: [],
}

