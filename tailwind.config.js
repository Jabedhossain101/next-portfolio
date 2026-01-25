/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Eikhane amra default 'sans' font ke Sansita diye replace korlam
        sans: ['var(--font-sansita)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
