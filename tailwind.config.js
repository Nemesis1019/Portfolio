/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
        "fondo":"#050220",
        "texto":"#A9A9A9",
        "fondoclaro":"#020024",
        "aqua":"#00FFFF",
        "darkgreen":"#006400",
        "orange":"#FF8C00",
        "orange2":"#D2691E",
        "blue":"#6495ED",
        "blue2":"#3933FF"
      },
    },
  },
  plugins: [],
}

