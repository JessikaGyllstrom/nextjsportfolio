/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        pattaya: ['var(--font-pattaya)'],
        swash: ['var(--font-swash)'],
        rampart: ['var(--font-rampart)'],
        chonburi: ['var(--font-chonburi)'],
      },
      colors: {
        petrol: '#0f141b'
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulse: {
          '0%, 100%':  { opacity: 15 },
          '50%': {opacity: .3 }
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
      animation: {
        pulse: 'pulse 10s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
