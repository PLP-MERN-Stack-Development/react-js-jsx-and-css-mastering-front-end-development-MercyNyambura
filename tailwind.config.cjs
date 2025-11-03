/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 this ensures Tailwind scans all your files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
