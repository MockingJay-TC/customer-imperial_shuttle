module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        about: "url('speed.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
