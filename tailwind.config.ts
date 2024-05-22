/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '1': '1px',
      },
      
    },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    colors: {
      'background': '#FBFBFA',
      'textcolor': '#302615',
      'primary': '#F4F2F0',
      'secondary': '#DFE3EA',
      'tertiary': '#F4F2F0',
      'white': '#fff',
      'black': '#000',
      'red': 'rgb(239, 68, 68)',
      'ccc': '#cccccc',
      '999': '#999999',
      '666': '#666666',
      '333': '#333333',
    },
    fontSize: {
      'xs':['18px', '20px'],
      'sm':['20px', '20px'],
      'lg': ['48px','54px'],
      'xl': ['50px','54px']
    },
    spacing: {
      'px': '1px',
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
      "10": "150px",
      "11": "200px",
    }
  },
  plugins: [],
}