/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      beige: "#fff8e2",
      darkPurple: "#3e427c",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
