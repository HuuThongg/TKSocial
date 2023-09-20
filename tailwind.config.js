/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
import { withUt } from 'uploadthing/tw';
module.exports = withUt({
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
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
    extend: {
      transitionTimingFunction: {
        'fade-out': 'cubic-bezier(0, 0, 1, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'quick-move-in': 'cubic-bezier(0.1, 0.9, 0.2, 1)',
        'fds-soft': 'cubic-bezier(.08,.52,.52,1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-always-dark-gradient': 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6))',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      scale: {
        102: '102',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        gray: colors.neutral,
        hotPink: '#FF1966',
        dark: '#111111',
        light: '#FAFAFA',
        violetDark: '#4c2889',
        'primary-clr': '#18191a',
        'secondary-clr': '#242526',
        'secondary-darker-clr': '#202122',
        'third-clr': '#3a3b3c',
        'fourth-clr': '#4e4f50',
        'fifth-clr': '#525355',
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
        'blue-btb-bg-acitve': '#263950',
        'media-inner-border': 'rgba(255, 255, 255, 0.05)',
        'media-outer-border': '#33363A',
        divider: '#3E4042',
        accent: 'hsl(214, 100%, 59%)',
        'popover-bg': '#3E4042',
        'comment-bg': '#3a3b3c',
        'messenger-card-bg': '#242526',
        'comment-foot': '#4f4f50',
        wash: '#3E4042',
        'sec-btn-bg': '#4B4C4F',
        'sec-btn-bg-hover': '#5d5e61',
        'primary-btn-bg': '#2374e1',
        'primary-btn-bg-hover': '#3982e4',
        'surface-bg': '#242526',
        // hsl(214, 100%, 59%)
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      scrollbarRed: {
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'red',
        },
      },
      transitionProperty: {
        height: 'height',
        'opacity-visible': 'opacity, visible',
        'opacity-transform': 'opacity, transform',
      },
      transitionDuration: {
        '200-1000': '200ms,1000ms',
      },
    },
    fontSize: {
      ss: ['.8125rem', '16px'],
      md: ['.9375rem', '19.9999px'],
    },
  },
  plugins: [
    // require('@headlessui/tailwindcss')

    // Or with a custom prefix:
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwindcss-animate'),
  ],
});







