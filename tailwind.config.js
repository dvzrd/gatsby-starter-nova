"use strict";

// Tailwind config: https://tailwindcss.com/docs/configuration
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
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
    colors: {
      gray: {
        "100": "var(--color-gray-100)",
        "200": "var(--color-gray-200)",
        "300": "var(--color-gray-300)",
        "400": "var(--color-gray-400)",
        "500": "var(--color-gray-500)",
        "600": "var(--color-gray-600)",
        "700": "var(--color-gray-700)",
        "800": "var(--color-gray-800)",
        "900": "var(--color-gray-900)",
      },
      primary: {
        "100": "var(--color-primary-100)",
        "200": "var(--color-primary-200)",
        "300": "var(--color-primary-300)",
        "400": "var(--color-primary-400)",
        "500": "var(--color-primary-500)",
        "600": "var(--color-primary-600)",
        "700": "var(--color-primary-700)",
        "800": "var(--color-primary-800)",
        "900": "var(--color-primary-900)",
      },
      secondary: {
        "100": "var(--color-secondary-100)",
        "200": "var(--color-secondary-200)",
        "300": "var(--color-secondary-300)",
        "400": "var(--color-secondary-400)",
        "500": "var(--color-secondary-500)",
        "600": "var(--color-secondary-600)",
        "700": "var(--color-secondary-700)",
        "800": "var(--color-secondary-800)",
        "900": "var(--color-secondary-900)",
      },
      service: {
        fail: "var(--color-service-fail)",
        info: "var(--color-service-info)",
        pass: "var(--color-service-pass)",
        warn: "var(--color-service-warn)",
      },
    },
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
