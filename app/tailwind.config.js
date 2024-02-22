module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-grey": "#14171a",
        "main-light-grey": "#1f2326",
        "main-green": "#8ac832",
        "main-dark-green": "#28a745",
        "main-orange": "#e84118",
      },
      fontFamily: {
        consolas: ["Consolas", "courier new"],
      },
      container: {
        center: true,
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
