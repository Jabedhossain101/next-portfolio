/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Body ba puro project-er default font hobe eti
        sans: ['var(--font-saira-condensed)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
