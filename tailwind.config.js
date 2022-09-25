/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: '#b2ffbd',
          // secondary: '#a2c9ef',
          // accent: '#81e2a0',
          // neutral: '#2A2932',
          // 'base-100': '#312C3F',
          // info: '#4770EB',
          // success: '#24C6A6',
          // warning: '#DC9804',
          // error: '#F60E48'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
};
