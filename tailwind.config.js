module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#202124',
        white: '#fcfcfc',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
