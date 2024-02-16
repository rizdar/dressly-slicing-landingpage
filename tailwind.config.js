import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Laura', 'serif'],
      },
      colors: {
        'primary-900': '#6B1915',
        'primary-700': '#A14B38',
        'primary-500': '#E09370',
        'primary-300': '#F5CCAB',
        'primary-200': '#FBE3C9',
        'secondary-900': '#15396B',
        'secondary-700': '#3872A1',
        'secondary-500': '#70BDE0',
        'secondary-300': '#ABE8F5',
        'neutral-900': '#12070B',
        'neutral-700': '#1B1314',
        'neutral-500': '#262626',
        'neutral-300': '#BDBDBD',
      },
    },
  },

  plugins: [formsPlugin, typographyPlugin],
};
