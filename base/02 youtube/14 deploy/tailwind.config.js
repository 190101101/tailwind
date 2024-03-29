module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
      },
      container: {
        center: true,
        screens: {
          lg: '1140px',
          xl: '1140px',
          '2xl': '1140px',
        }
      },
      spacing:{
        '128':'32rem'
      }
    }
  },
  plugins: [],
}
