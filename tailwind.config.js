module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "awesome-color": "#56b890",
      },
    },
  },
  variants: {
    extend: {
      flexDirection: ['hover', 'focus'],
    },
  },
  plugins: [],
};
