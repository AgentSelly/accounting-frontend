/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Inria Sans", "Sanf-serif"],
      },
      colors: {
        primary: {
          50: '#f3f6fc',
          100: '#e5edf9',
          200: '#c5d9f2',
          300: '#93bbe6',
          400: '#468cd3', // LOGO
          500: '#337bc4',
          600: '#235fa6',
          700: '#1e4d86',
          800: '#1c4370',
          900: '#1d395d',
          950: '#13253e',
        },
        secondary: {
          50: '#f1fcf9',
          100: '#d1f6ef',
          200: '#a3ece1',
          300: '#55d5c6', // LOGO
          400: '#3fc2b7',
          500: '#26a69d',
          600: '#1c8580',
          700: '#1a6b68',
          800: '#195654',
          900: '#194847',
          950: '#09292a',
        },
        accent: {
          50: '#f1fbea',
          100: '#dff7d0',
          200: '#c2efa7',
          300: '#9ae272', // LOGO
          400: '#78d249',
          500: '#59b82a',
          600: '#42921e',
          700: '#33701b',
          800: '#2d591b',
          900: '#274c1b',
          950: '#11290a',
        },
      }
    },
  },
  plugins: [],
};

