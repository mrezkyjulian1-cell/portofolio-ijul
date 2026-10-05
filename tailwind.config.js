/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050510',
        surface: {
          DEFAULT: '#0a0d1d',
          card: 'rgba(15, 23, 42, 0.65)',
          hover: 'rgba(30, 41, 59, 0.75)',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3c84f6',
          DEFAULT: '#2c67ed',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          cyan: '#06b6d4',
          sky: '#38bdf8',
          purple: '#8b5cf6',
          pink: '#ec4899',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'spin-reverse': 'spin 20s linear infinite reverse',
        'shine': 'shine 3s ease-in-out infinite',
        'border-beam': 'borderBeam 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        borderBeam: {
          '100%': { 'offset-distance': '100%' },
        }
      },
      boxShadow: {
        'neon-blue': '0 0 25px rgba(44, 103, 237, 0.45)',
        'neon-cyan': '0 0 25px rgba(6, 182, 212, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
