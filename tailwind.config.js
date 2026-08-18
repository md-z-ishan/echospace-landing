/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          950: '#0B0F19',
          900: '#1E293B',
          800: '#334155',
        },
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          300: '#C4B5FD',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        slate: {
          950: '#0B0F19',
          900: '#0F172A',
          850: '#162032',
          800: '#1E293B',
          700: '#334155',
          400: '#94A3B8',
          500: '#64748B',
          100: '#F1F5F9',
          50: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-violet': '0 0 25px rgba(167, 139, 250, 0.45)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.45)',
        'node-hover': '0 0 30px rgba(167, 139, 250, 0.55), 0 10px 20px -5px rgba(15, 23, 42, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glow: {
          '0%': { opacity: '0.6', filter: 'drop-shadow(0 0 2px rgba(167, 139, 250, 0.4))' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 10px rgba(167, 139, 250, 0.9))' },
        }
      }
    },
  },
  plugins: [],
}
