/** @type {import('tailwindcss').Config} */
module.exports = {


  darkMode: 'class', // Yoki 'media' deb o'zgartiring
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      'custom': '0px 9px 13px 9px rgba(0, 0, 0, 0.03)',
    },
    // boxShadow: {
    //   'custom': '0px 2px 4px 0px rgba(0, 0, 0, 0.06)', 
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,      
        padding: {
          DEFAULT: '1rem', 
          sm: '2rem',     
          lg: '4rem',      
          xl: '5rem',     
          '2xl': '6rem',  
        },
      },
    },
  },
  plugins: [],
};
