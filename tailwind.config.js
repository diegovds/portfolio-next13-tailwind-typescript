/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(161, 161, 170, 0.18)',
      },
    },
  },
  plugins: [],
}
