/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue': '#C4D7F2',
        'green': '#C6DEA6',
        'cream': '#F1FEC6',
        'lapis': '#586994',
        'caramel': '#BE7C4D'
      }
    },
  },
  plugins: [],
}

