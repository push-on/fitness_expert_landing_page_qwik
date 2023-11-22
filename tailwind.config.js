/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('tailwindcss-animated')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ef4444",
          "secondary": "#be123c",
          "accent": "#e11d48",
          "neutral": "#1f2937",
          "base-100": "#111827",
          "info": "#d6d3d1",
          "success": "#10b981",
          "warning": "#b91c1c",
          "error": "#b91c1c",
        },
      },
    ],
  },
  darkMode: 'class'
}