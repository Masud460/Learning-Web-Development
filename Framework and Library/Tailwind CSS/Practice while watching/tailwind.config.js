/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*"],
  theme: {
    extend: {
      screens: {
        sm: "380px",
        md: "640px",
        lg: "890px",
        xl: "1200px",
        "2xl": "1480px",
      },
      colors: {
        "blue-def": "#0984e3",
      },
      fontFamily: {
        mono: ["Fira Code", 'monospace'],
      },
    },
  },
  plugins: [],
};
