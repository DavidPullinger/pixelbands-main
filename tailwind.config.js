const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#221d51",
        secondary: "#fff",
        accent: "#c2226c",
        background: "#000",
      },
      screens: {
        md: "825px",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("supports-blur", "@supports (backdrop-filter: blur(1rem))"); // for mobile nav
    }),
  ],
};
