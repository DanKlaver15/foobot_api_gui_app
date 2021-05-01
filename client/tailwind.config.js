module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    boxShadow: {
      "4xl": "0 20px 25px -5px rgba(200, 200, 200, 0.5)",
      "3xl": "0 40px 65px -20px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};
