/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Corrected Tailwind CSS configuration
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        accent: '#ff6384', // Add a comma here
        // Add more custom colors as needed
      },
    },
  },
  variants: {},
  plugins: [],
};
