import typography from '@tailwindcss/typography';
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: {
      ink: { DEFAULT: '#0B1B33', 700: '#13294B', 900: '#071223' },
      gold: { 400: '#E0BD6A', 500: '#C9A24B', 600: '#9A7623' },
      cream: '#FAF8F4',
    },
    fontFamily: {
      sans: ['Manrope', 'system-ui', 'sans-serif'],
      display: ['Fraunces', 'Georgia', 'serif'],
    },
  } },
  plugins: [typography],
};
