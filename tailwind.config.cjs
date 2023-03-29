const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx, html}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Open Sans', 'serif'],
    },
    colors: {
      'white': '#fff',
      'blue': {
        '50': '#f0f5fe',
        '100': '#dde8fc',
        '200': '#c3d8fa',
        '300': '#9bc1f5',
        '400': '#6ba0ef',
        '500': '#5385ea',
        '600': '#3360dd',
        '700': '#2a4ccb',
        '800': '#283fa5',
        '900': '#263a82',
      },
      'blue-zodiac': {
        '50': '#f2f7fd',
        '100': '#e3edfb',
        '200': '#c1dbf6',
        '300': '#8abeef',
        '400': '#4c9ce4',
        '500': '#2580d2',
        '600': '#1663b3',
        '700': '#134f91',
        '800': '#144578',
        '900': '#0e253f',
      },
      'java': {
        '50': '#f0fdfc',
        '100': '#cdfaf6',
        '200': '#9af5ee',
        '300': '#60e8e3',
        '400': '#2fd2d0',
        '500': '#16b2b3',
        '600': '#0f8f92',
        '700': '#107175',
        '800': '#12595d',
        '900': '#144a4d',
      },
      'black': {
        '50': '#f7f7f7',
        '100': '#e3e3e3',
        '200': '#c8c8c8',
        '300': '#a4a4a4',
        '400': '#808080',
        '500': '#666666',
        '600': '#515151',
        '700': '#434343',
        '800': '#383838',
        '900': '#313131',
      },
    },

    extend: {
      fontSize: {
        'tiny': ['0.75rem', {
          lineHeight: '1.05rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
        'xsm': ['0.65rem', {
          lineHeight: '1rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
      }
    }
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addVariant, e }) {
      addVariant('not-first', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`not-first${separator}${className}`)}:not(:first-child)`
        })
      })
    }),
  ],
}