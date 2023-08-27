/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      "black-ops": ["Black Ops One", "sans-serif"],
      "crimson-text": ["Crimson Text", "serif"],
      acme: ["Acme"],
      fugas: ["Fugaz One"],
      inter: ["Inter"],
    },

    extend: {
      backgroundImage: {
        site: "url('../assets/bgimage/home.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
