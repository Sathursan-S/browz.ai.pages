
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#030014', // Deep space black-blue
        surface: '#0F0B1E', // Slightly lighter dark for cards
        brand: {
          50: '#f0fdfa',
          400: '#2dd4bf',
          500: '#14b8a6', // Teal (legacy brand)
        },
        primary: {
          400: '#c084fc', // Violet
          500: '#a855f7',
          600: '#9333ea',
        },
        secondary: {
          400: '#f472b6', // Pink
          500: '#ec4899',
          600: '#db2777',
        },
        accent: {
          400: '#22d3ee', // Cyan
          500: '#06b6d4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      }
    },
  },
  plugins: [],
}
