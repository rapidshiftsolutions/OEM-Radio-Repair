/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SFB', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f7ff',        // lightest blue
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',       // OEM Radio Repair blue
          600: '#096dd9',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',       // darkest blue
        },
        accent: {
          50: '#e6ffe6',        // light pastel green
          100: '#bfffbf',
          200: '#99ff99',
          300: '#66ff66',
          400: '#33ff33',
          500: '#00e600',       // vibrant pastel green
          600: '#00b300',
          700: '#008000',
          800: '#005c00',
          900: '#003d00',       // deep green accent
        },
        light: {
          50: '#fafafa',        // lightest neutral with warmth
          100: '#f3f3f3',
          200: '#e4e4e4',
          300: '#cecece',
          400: '#a1a1a1',
          500: '#7a7a7a',       // balanced neutral
          600: '#606060',
          700: '#474747',
          800: '#313131',
          900: '#202020',       // charcoal dark
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
