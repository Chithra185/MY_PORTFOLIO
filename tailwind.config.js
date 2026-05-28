/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#050810',
        surface: '#0d1117',
        card: '#111827',
        border: '#1f2937',
        accent: '#6ee7f7',
        accent2: '#a78bfa',
        accent3: '#34d399',
        muted: '#6b7280',
        text: '#e2e8f0',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh': 'radial-gradient(at 40% 20%, hsla(186,100%,70%,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(265,100%,70%,0.10) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(157,100%,60%,0.08) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
