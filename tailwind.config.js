module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      backgroundImage: {
        about: "url('speed.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
