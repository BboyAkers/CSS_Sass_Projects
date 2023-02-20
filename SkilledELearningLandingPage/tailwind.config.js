/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      'sans': ['"Plus Jakarta Sans", sans-serif'],
    },
    extend: {
      colors: {
        blue: {
          light: '#666CA3',
          DEFAULT: "#4851FF",
          dark: '#13183F'
        },
        grey: {
          DEFAULT: '#83869A'
        },
        pink: {
          light: '#FFA7C3',
          DEFAULT: '#F02AA6',
          dark: '#F74780'
        },
        orange: {
          DEFAULT: '#FF6F48'
        },
        white: {
          DEFAULT: '#FFFFFF',
          dark: '#F0F1FF'
        },
      },
    },
    plugins: [],
  }
}
