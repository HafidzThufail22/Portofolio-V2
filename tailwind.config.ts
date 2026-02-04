import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Soft Dark Theme Colors
        background: {
          DEFAULT: '#0a0a0a',  // Soft Black (not pure black)
          secondary: '#111111',
          tertiary: '#171717',
        },
        foreground: {
          DEFAULT: '#e5e7eb',  // Glowing Gray / Silver
          muted: '#9ca3af',
          subtle: '#6b7280',
        },
        // Accent Colors
        primary: {
          DEFAULT: '#3b82f6',  // Blue
          hover: '#2563eb',
          glow: 'rgba(59, 130, 246, 0.5)',
        },
        accent: {
          DEFAULT: '#8b5cf6',  // Purple
          hover: '#7c3aed',
          glow: 'rgba(139, 92, 246, 0.5)',
        },
        // Utility Colors
        border: '#27272a',
        card: '#111111',
        muted: '#27272a',
        destructive: '#ef4444',
        success: '#22c55e',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        // Subtle Glow Effects
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.3)',
        'glow-md': '0 0 20px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.5)',
        'glow-accent': '0 0 20px rgba(139, 92, 246, 0.4)',
        'glow-white': '0 0 15px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(59, 130, 246, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
