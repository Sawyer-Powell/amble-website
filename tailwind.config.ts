import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#458588',
        secondary: '#98971a',
        accent: '#d79921',
        background: '#1d2021',
        white: "#ebdbb2",
        black: "#1d2021",
        darkgray: "#282828",
        gray: "#504945",
        lightgray: "#a89984",
        offwhite: "#ebdbb2",
        aqua: '#8ec07c',
        purple: '#d3869b',
        orange: '#fe8019'
      },
      fontSize: {
        base: '18px',
        lg: '22px',
        xl: '26px',
        xxl: '30px'
      },
      fontFamily: {
        sans: ['Nunito Sans', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

export default config;
