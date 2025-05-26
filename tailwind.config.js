// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#FF6B00', // Placeholder: Vibrant Orange (Client to confirm/update)
        'brand-secondary': '#1A202C', // Placeholder: Dark Slate Gray (Client to confirm/update)
        'brand-accent': '#38B2AC',  // Placeholder: Teal (Client to confirm/update)
        'light-gray': '#F7FAFC', // For backgrounds
        'medium-gray': '#EDF2F7',
      },
      fontFamily: {
        // Client to ensure these fonts are loaded (e.g., via Google Fonts in _document.js)
        sans: ['Inter', ...defaultTheme.fontFamily.sans], 
        serif: ['Lora', ...defaultTheme.fontFamily.serif], 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
