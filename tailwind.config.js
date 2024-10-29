/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:()=>({
        'custom-background':"url('./src/assets/pexels-mosen-10973333.jpg')"
      })
    },
  },
  plugins: [],
}

