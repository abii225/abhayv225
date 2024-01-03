/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "300px",
      md: "640px",
      lg: "768px",
      xl: "1200px",
    },
    extend: {
      backgroundImage: {
        about:
          "url('https://i.ibb.co/Byk01vZ/bliss-rar-100088829-473791836742084-7464846124536524567-n-1-removebg-preview-1-Copy-removebg-preview.png')",
      },
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
    },
  },
  plugins: [],
};
