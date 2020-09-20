"use strict";

// Tailwind config: https://tailwindcss.com/docs/configuration
module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      listStyleType: {
        square: "square",
      },
    },
  },
  variants: {},
  plugins: [],
};
