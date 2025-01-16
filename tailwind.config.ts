import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        yellow: {
          100: '#fffde7',
          200: '#fff59d',
          300: '#ffee58',
          400: '#fdd835',
          500: '#fbc02d',
          600: '#f9a825',
        },
        purple: {
          100: '#ede7f6',
          200: '#b39ddb',
          300: '#9575cd',
          400: '#7e57c2',
          500: '#673ab7',
          600: '#512da8',
        },
        cyan: {
          100: '#d1c4e9',
          200: '#b39ddb',
          300: '#9575cd',
          400: '#7e57c2',
          500: '#673ab7',
          600: '#512da8',
        },
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
