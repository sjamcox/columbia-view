/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.tsx', './components/**/*.tsx'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      primary: {
        'dark-blue': '#0B496F',
        'light-blue': '#39AAE1',
      },
      secondary: {
        aqua: '#40BCBC',
        green: '#83B841',
        yellow: '#FDBF51',
        red: '#E96351',
        'blue-black': '#03344D',
      },
      neutral: {
        'dark-gray': '#333132',
        'mid-gray': '#B8B9B9',
        'light-gray': '#E7E7E7',
        'light-blue': '#BDE6FA',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
