const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      cover: 'cover',
      contain: 'contain',
      auto: 'auto',
      '50%': '50%',
      '70%': '70%',
      '80%': '80%',
    },
    extend: {
      colors: {
        'god-yellow': '#FAEF96',
        'god-mint': '#1DCAB6',
        'god-light-mint': '#6EFFEE',
        'god-deeplight-mint': '#C3FCF1',
        'god-brown': '#625F4E',
        'god-light-brown': '#AFAB99',
        'god-light-orange': '#FFCA8D',
        'god-coral': '#F98E71',
        'god-light-coral': '#FECCBE',
        'god-purple': '#FF90DF',
        'god-gray': '#4A4737',
        'god-red': '#ED3B38',
      },
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '2/3': '66.666667%',
        '3/4': '75%',
        '4/5': '80%',
        full: '100%',
      },
      maxWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '2/3': '66.666667%',
        '3/4': '75%',
        '4/5': '80%',
        full: '100%',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '2/3': '66.666667%',
        '3/4': '75%',
        '4/5': '80%',
        full: '100%',
        75: '18.75rem',
      },
      maxHeight: {
        75: '18.75rem',
      },
      height: {
        75: '18.75rem',
        100: '25rem',
        150: '37.5rem',
      },
      width: {
        fit: 'fit-content',
        75: '18.75rem',
        100: '25rem',
        150: '37.5rem',
      },
      margin: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      padding: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        full: '100%',
      },
      scale: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['first', 'last', 'peer-checked', 'disabled', 'group-hover'],
      borderOpacity: ['first', 'last', 'peer-checked', 'disabled', 'group-hover'],
      borderRadius: ['first', 'last', 'peer-checked', 'disabled', 'group-hover'],
      borderStyle: ['first', 'last', 'peer-checked', 'disabled', 'group-hover'],
      borderWidth: ['first', 'last', 'peer-checked', 'disabled', 'group-hover'],
      backgroundColor: ['first', 'last', 'peer-checked', 'disabled', 'group-hover'],
      backgroundOpacity: ['first', 'last', 'peer-checked', 'disabled', 'group-hover'],
      margin: ['first', 'last', 'peer-checked', 'disabled', 'group-hover'],
      padding: ['first', 'last', 'peer-checked', 'disabled', 'group-hover'],
      opacity: ['first', 'last', 'peer-checked', 'disabled', 'group-hover'],
      textColor: ['first', 'last', 'peer-checked', 'disabled', 'group-hover'],
      rotate: ['first', 'last', 'peer-checked', 'disabled', 'group-hover'],
      scale: ['first', 'last', 'peer-checked', 'disabled', 'group-hover'],
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('peer-checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`peer-checked${separator}${className}`) // escape class
          const selector = 'input[type="radio"]' // your input selector. Could be any
          return [`${selector}:checked ~ .${eClassName}`] // ~ - CSS selector for siblings
        })
      })
    }),
    require('@tailwindcss/forms'),
  ],
}
