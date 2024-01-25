/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '1': '1px',
      }
    },
    colors: {
      'primary': '#EBE4DC',
      'secondary': '#DFE3EA',
      'tertiary': '#131416',
      'white': '#ffffff',
      'black': '#000000',
      'ccc': '#cccccc',
      '999': '#999999',
      '666': '#666666',
    },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      'xs':['18px', '20px'],
      'sm':['20px', '20px'],
      'lg': ['48px','54px'],
      'xl': ['50px','54px']
    },
    spacing: {
      '0': '0px',
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '60px',
      '8': '100px',
      '9': '120px',
    }
  },
  plugins: [],
}