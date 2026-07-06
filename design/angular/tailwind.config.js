/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        // Built from the supplied daisyUI "dark" theme (oklch).
        // Defined with <alpha-value> so opacity utilities work: bg-primary/15, etc.
        base: {
          100: 'oklch(21.15% 0.012 254.09 / <alpha-value>)',
          200: 'oklch(23.26% 0.014 253.1 / <alpha-value>)',
          300: 'oklch(25.33% 0.016 252.42 / <alpha-value>)',
        },
        content: 'oklch(98% 0.003 247.858 / <alpha-value>)',
        muted: 'oklch(70% 0.015 252 / <alpha-value>)',
        faint: 'oklch(62% 0.015 252 / <alpha-value>)',
        primary: 'oklch(58% 0.233 277.117 / <alpha-value>)',
        'primary-content': 'oklch(96% 0.018 272.314 / <alpha-value>)',
        secondary: 'oklch(65% 0.241 354.308 / <alpha-value>)',
        accent: 'oklch(77% 0.152 181.912 / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        shell: '1120px',
        read: '720px',
        list: '820px',
      },
      keyframes: {
        revUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        revUp: 'revUp .7s cubic-bezier(.2,.7,.2,1) both',
      },
    },
  },
  plugins: [],
};
