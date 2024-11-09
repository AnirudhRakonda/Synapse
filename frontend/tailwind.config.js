/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor : '#ffffff',
        primary: '#1E1E1E',
        active: '#5572CA',
        secondary: '#44527F',
        cta: '#e3342f',
      },
    },
  },
  plugins: [],
}
