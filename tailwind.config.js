/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./src/**/*.{html,js}",
  ],
  theme: {
    screens: {
      'tablet': ''

    }

  },
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
    extend: {
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
    },
  },
  plugins: [],
}
