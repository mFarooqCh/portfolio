import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#0a0a0b',
        surface: '#121214',
        border:  '#232327',
        muted:   '#8a8a94',
        fg:      '#e8e8ea',
        accent:  '#4ade80',
        'accent-text': '#71cda7',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: { measure: '68ch' },
    },
  },
  plugins: [],
} satisfies Config;
