/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    // extend: {
    //   animation: {
    //     'infinite-scroll': 'infinite-scroll 25s linear infinite',
    //   },
    //   keyframes: {
    //     'infinite-scroll': {
    //       from: { transform: 'translateX(0)' },
    //       to: { transform: 'translateX(-100%)' },
    //     }
    //   }
    // },
    colors: {
      'primary': '#232D3E',
      'secondary': '#DFE3EA',
      'tertiary': '#131416',
      'white': '#ffffff',
      'black': '#000000',
    },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    }
  },
  plugins: [],
}