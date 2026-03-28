import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B3A6B',
          50: '#EDF2FA',
          100: '#D0DFF5',
          200: '#A3BFE8',
          300: '#6B97D4',
          400: '#3E6FB5',
          500: '#1B3A6B',
          600: '#163058',
          700: '#112545',
          800: '#0B1929',
          900: '#060E18',
          foreground: '#EDF2FA',
        },
        accent: {
          DEFAULT: '#D0DFF5',
          foreground: '#0B1929',
        },
        background: '#0A1628',
        foreground: '#E8EDF5',
        muted: {
          DEFAULT: '#0E1E38',
          foreground: 'rgba(232,237,245,0.55)',
        },
        destructive: {
          DEFAULT: '#dc2626',
          foreground: '#E8EDF5',
        },
        border: 'rgba(232,237,245,0.1)',
        input: 'rgba(232,237,245,0.1)',
        ring: '#1B3A6B',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
    },
  },
  plugins: [],
}

export default config
