import React from "react";

import { ThemeProvider } from "./src/contexts";

import "./src/assets/styles/main.css";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
