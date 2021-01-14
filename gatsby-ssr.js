"use-strict";

import React from "react";

import { ThemeProvider } from "./src/contexts";

import "./assets/styles/main.css";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
