/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'fade-out': 'cubic-bezier(0, 0, 1, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        gray: colors.neutral,
        hotPink: '#FF1966',
        dark: '#111111',
        light: '#FAFAFA',
        violetDark: '#4c2889',
        'primary-clr': '#18191a',
        'secondary-clr': '#242526',
        'third-clr': '#3a3b3c',
        'fourth-clr': '#4e4f50',
        'secondary-text': '#B0B3B8',
        'primary-text': '#E4E6EB',
        'primary-icon': '#E4E6EB',
        'hover-overlay': 'rgba(255, 255, 255, 0.1)',
        'red-notif': '#e41e3f',
        'primary-btn-icon': '#e4e6eb',
        'secondary-btn-bg': 'rgba(255,255,255,.1)',
        'primary-icon-clr-hover': '#4e4f50',
        'primary-icon-clr-active': '#3c3d3f',
        'comment-bg-clr-hover': '#292a2c',
        'blue-link': '#4599FF',
        'primary-deemphasized-bt-bg': 'rgba(45, 136, 255, 0.2)',
        'primary-deemphasized-bt-text': '#2D88FF',
        'primary-deemphasized-bt-hover': '#3c4d63',
        'disabled-icon': 'rgba(255, 255, 255, 0.3)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 },
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
      },
      screens: {
        xs: '480px',
        ss: '649px',
        sm: '768px',
        '2sm': '790px',
        md: '899px',
        lg: '1159px',
        '2lg': '1340px',
        xl: '1420px',
        // xl: '899 1100 1160 1340 1420 1920',
        '2xl': '1921px',
      },
    },
  },
  plugins: [],
};