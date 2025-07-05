const rtl = require("tailwindcss-rtl");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // adjust to match your files
  ],
  theme: {
    extend: {},
  },
  plugins: [rtl()],
};
