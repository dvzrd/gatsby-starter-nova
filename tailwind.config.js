"use strict";

// Tailwind config: https://tailwindcss.com/docs/configuration

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.md",
      "./src/**/*.mdx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    options: {
      whitelist: [
        // utilities
        "contained",
        "max-w-screen-1/4",
        "max-w-screen-1/3",
        "max-w-screen-1/2",
        "max-w-screen-2/3",
        "max-w-screen-3/4",
        "min-h-screen-1/4",
        "min-h-screen-1/3",
        "min-h-screen-1/2",
        "min-h-screen-2/3",
        "min-h-screen-3/4",
        "text-up-xs",
        "text-up-sm",
        "text-up-base",
        "text-up-lg",
        "text-up-xl",
        "text-up-2xl",
        "text-up-3xl",
        "text-up-4xl",
        "text-up-5xl",
        // components
        "layout-default",
        "layout-main",
        "topbar-default",
        "section-navbar",
        "section-default",
        "section-content",
        "section-feature",
        "section-heel",
        "section-hero",
        "text-body",
        "text-caption",
        "text-heading",
        "text-hero",
        "text-legend",
        "text-meta",
        "text-subheading",
        "text-subtitle",
        "text-title",
      ],
    },
  },
  theme: {
    colors: {
      background: {
        default: "var(--color-background)",
        paper: "var(--color-background-paper)",
        primary: "var(--color-background-primary)",
        secondary: "var(--color-background-secondary)",
      },
      black: "var(--color-black)",
      color: {
        default: "var(--color-text)",
        paper: "var(--color-text-paper)",
        primary: "var(--color-text-primary)",
        "primary-dark": "var(--color-text-primary-dark)",
        "primary-light": "var(--color-text-primary-light)",
        secondary: "var(--color-text-secondary)",
        "secondary-dark": "var(--color-text-secondary-dark)",
        "secondary-light": "var(--color-text-secondary-light)",
      },
      gray: {
        50: "var(--color-gray-50)",
        100: "var(--color-gray-100)",
        200: "var(--color-gray-200)",
        300: "var(--color-gray-300)",
        400: "var(--color-gray-400)",
        500: "var(--color-gray-500)",
        600: "var(--color-gray-600)",
        700: "var(--color-gray-700)",
        800: "var(--color-gray-800)",
        900: "var(--color-gray-900)",
      },
      primary: {
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        400: "var(--color-primary-400)",
        500: "var(--color-primary-500)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",
      },
      purple: {
        100: "var(--color-purple-100)",
        200: "var(--color-purple-200)",
        300: "var(--color-purple-300)",
        400: "var(--color-purple-400)",
        500: "var(--color-purple-500)",
        600: "var(--color-purple-600)",
        700: "var(--color-purple-700)",
        800: "var(--color-purple-800)",
        900: "var(--color-purple-900)",
      },
      secondary: {
        100: "var(--color-secondary-100)",
        200: "var(--color-secondary-200)",
        300: "var(--color-secondary-300)",
        400: "var(--color-secondary-400)",
        500: "var(--color-secondary-500)",
        600: "var(--color-secondary-600)",
        700: "var(--color-secondary-700)",
        800: "var(--color-secondary-800)",
        900: "var(--color-secondary-900)",
      },
      service: {
        fail: "var(--color-service-fail)",
        info: "var(--color-service-info)",
        pass: "var(--color-service-pass)",
        warn: "var(--color-service-warn)",
      },
      white: "var(--color-white)",
      yellow: {
        100: "var(--color-yellow-100)",
        200: "var(--color-yellow-200)",
        300: "var(--color-yellow-300)",
        400: "var(--color-yellow-400)",
        500: "var(--color-yellow-500)",
        600: "var(--color-yellow-600)",
        700: "var(--color-yellow-700)",
        800: "var(--color-yellow-800)",
        900: "var(--color-yellow-900)",
      },
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "1.5rem",
        md: "3rem",
        lg: "6rem",
        xl: "12rem",
      },
    },
    extend: {
      fontSize: {
        "7xl": "5rem",
      },
      listStyleType: {
        square: "square",
      },
      height: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        auto: "auto",
        "screen-1/4": "25vh",
        "screen-1/3": "33.3333vh",
        "screen-1/2": "50vh",
        "screen-2/3": "66.6666vh",
        "screen-3/4": "75vh",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "screen-1/4": "25vw",
        "screen-1/3": "33.3333vw",
        "screen-1/2": "50vw",
        "screen-2/3": "66.6666vw",
        "screen-3/4": "75vw",
      },
      minHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "screen-1/4": "25vh",
        "screen-1/3": "33.3333vh",
        "screen-1/2": "50vh",
        "screen-2/3": "66.6666vh",
        "screen-3/4": "75vh",
      },
      width: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        auto: "auto",
        "screen-1/4": "25vw",
        "screen-1/3": "33.3333vw",
        "screen-1/2": "50vw",
        "screen-2/3": "66.6666vw",
        "screen-3/4": "75vw",
      },
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
        light: { raw: "(prefers-color-scheme: light)" },
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
    },
  },
};
