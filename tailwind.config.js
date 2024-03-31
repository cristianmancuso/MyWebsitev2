/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      'bgWeb': '#031926',
      'bluemarino': '#468189',
      'bluemarinol': '#77ACA2',
      'celeste': '#9dbbeb',
      'amarillo': '#f4e9cd',
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

