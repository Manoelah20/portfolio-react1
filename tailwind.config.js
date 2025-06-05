/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#007bff',
          secondary: '#6c757d',
          success: '#28a745',
          danger: '#dc3545',
          warning: '#ffc107',
          info: '#17a2b8',
          light: '#f8f9fa',
          dark: '#343a40',
        },
        fontFamily: {
          sans: ['Arial', 'sans-serif'],
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }