/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUpBounce: {
          '0%': { opacity: '0', transform: 'translateY(48px)' },
          '70%': { opacity: '1', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRightBounce: {
          '0%': { opacity: '0', transform: 'translateX(60px) scale(0.9)' },
          '70%': { opacity: '1', transform: 'translateX(-8px) scale(1.02)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        slideInLeftBounce: {
          '0%': { opacity: '0', transform: 'translateX(-60px) scale(0.9)' },
          '70%': { opacity: '1', transform: 'translateX(8px) scale(1.02)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.7) translateY(24px)' },
          '60%': { opacity: '1', transform: 'scale(1.05) translateY(-4px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'fade-in-scale': 'fadeInScale 0.5s ease-out forwards',
        'slide-up-bounce': 'slideUpBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'slide-in-right-bounce': 'slideInRightBounce 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'slide-in-left-bounce': 'slideInLeftBounce 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'pop-in': 'popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      },
    },
  },
  plugins: [],
}