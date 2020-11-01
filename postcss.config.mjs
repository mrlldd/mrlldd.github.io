/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {
      theme: {
        extend: {
          fontFamily: {
            mono: ['var(--font-jetbrains)', 'monospace'],
          },
          textShadow: {
            'outline-black': '2px 2px 0px black, -2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black',
          }
        }
      },
    },
  },
};

export default config;
