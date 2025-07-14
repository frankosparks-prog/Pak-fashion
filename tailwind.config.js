/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatHeart: {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-100px) scale(1.6)' },
        },
      },
      animation: {
        floatHeart: 'floatHeart 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};

