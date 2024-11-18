/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      SB00: ['AppleSDGothicNeoSB00'],
      M00: ['AppleSDGothicNeoM00'],
      R00: ['AppleSDGothicNeoR00'],
    },
    colors: {
      200: '#CBCDD2',
      400: '#74787E',
      800: '#000000',
    },
  },
  plugins: [],
}
