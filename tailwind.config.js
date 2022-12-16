/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 10s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%':  { opacity: 15 },
          '50%': {opacity: .3 }
        }        
      }
    },
  },
  plugins: [],
}
