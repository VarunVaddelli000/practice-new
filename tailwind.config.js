/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Adding custom animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        textGlow: {
          '0%, 100%': { color: 'white' },
          '50%': { color: 'rgb(219, 234, 254)' }, // Light blue color
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-in-out',
        zoomInOut: 'zoomInOut 1.5s ease-in-out infinite',
        textGlow: 'textGlow 3s ease-in-out infinite',
        bounceIn: 'bounceIn 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
