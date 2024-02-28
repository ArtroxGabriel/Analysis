/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#5468ff',
        secundary: '#66b2ff',
        red: '#d84b64',
        green: '#2fa549',
        blue: '#1976d2',
        black: {
          '100': '#101418',
          '70': '#2f3237',
        },
        white: {
          '100': '#ffffff',
          '40': '#c2c9d6',
          '20': '#f1f3f9',
        },

      },
    },
  },
  plugins: [],
}

