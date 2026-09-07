/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#ffffff",
        lightText: "#2d3748",
        boxBg: "linear-gradient(145deg, #ffffff, #f3f4f6)",
        designColor: "#000000",
      },
      boxShadow: {
        shadowOne: "6px 6px 16px rgba(0, 0, 0, 0.08), -6px -6px 16px rgba(255, 255, 255, 0.9)",
      },
    },
  },
  plugins: [],
};
