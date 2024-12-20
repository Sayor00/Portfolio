/** @type {import('tailwindcss').Config} */
// tailwind.config.mjs
export default {
  darkMode: 'class', // Enables dark mode via the 'dark' class
  content: [
    "./src/pages/**/*.{js,jsx,mjs}",
    "./src/components/**/*.{js,jsx,mjs}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
