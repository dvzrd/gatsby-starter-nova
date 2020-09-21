"use strict";

// Tailwind config: https://tailwindcss.com/docs/configuration
module.exports = {
  purge: {
    content: [
      "./data/**/*.md",
      "./data/**/*.mdx",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.md",
      "./src/**/*.mdx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    options: {
      whitelist: ["a", "active", "body", "html", "img"],
    },
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        xs: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
        "3xl": "3.5rem",
        "4xl": "4rem",
      },
    },
    extend: {
      listStyleType: {
        square: "square",
      },
    },
    fontFamily: {
      sans: [
        "Nunito Sans",
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "'Helvetica Neue'",
        "Arial",
        "'Noto Sans'",
        "sans-serif",
        "'Apple Color Emoji'",
        "'Segoe UI Emoji'",
        "'Segoe UI Symbol'",
        "'Noto Color Emoji'",
      ],
      serif: ["Georgia", "Cambria", "'Times New Roman'", "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        "'Liberation Mono'",
        "'Courier New'",
        "monospace",
      ],
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
  },
  variants: {},
  plugins: [],
};
