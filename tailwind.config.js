/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--canvas)',
        surface: {
          DEFAULT: 'var(--surface)',
          raised: 'var(--surface-raised)',
          soft: 'var(--surface-soft)',
        },
        ink: {
          DEFAULT: 'var(--ink)',
          soft: 'var(--ink-soft)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          soft: 'var(--muted-soft)',
        },
        'mint-rail': {
          DEFAULT: 'var(--mint-rail)',
          deep: 'var(--mint-rail-deep)',
        },
        mint: 'var(--mint)',
        teal: {
          DEFAULT: 'var(--teal)',
          deep: 'var(--teal-deep)',
          dark: 'var(--teal-dark)',
        },
        peach: {
          DEFAULT: 'var(--peach)',
          soft: 'var(--peach-soft)',
        },
        rose: 'var(--rose)',
        amber: 'var(--amber)',
        blue: 'var(--blue)',
        focus: 'var(--focus)',
        success: 'var(--success)',
      },
      fontFamily: {
        sans: ['var(--font-ui)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      boxShadow: {
        clay: 'var(--clay-shadow)',
        'clay-soft': 'var(--clay-shadow-soft)',
        'clay-inset': 'var(--clay-inset)',
        'clay-inset-light': 'var(--clay-inset-light)',
      },
      borderRadius: {
        xl: 'var(--radius-xl)',
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        pill: 'var(--radius-pill)',
      },
    },
  },
  plugins: [],
};
