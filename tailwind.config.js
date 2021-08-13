module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    },
    fontFamily: {
      Poppins: [ "Poppins, sans-serif"]
    },
    extend: {
      colors: {
        "tbpp-purple": "#5267DF",
        "tbpp-red": "#FA5959",
        "tbpp-blue": "#242A45",
        "tbpp-grey": "#9194A2",
        "tbpp-white": "#f7f7f7",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

