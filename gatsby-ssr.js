"use-strict";

import React from "react";

import { ThemeProvider } from "./src/contexts";

import "./assets/styles/main.css";

/**
 * Update order of metatags in head to fix social share issues.
 * https://github.com/gatsbyjs/gatsby/issues/9979#issuecomment-627344993
 */
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  headComponents.sort((a, b) => {
    if (a.type === b.type || (a.type !== "style" && b.type !== "style")) {
      return 0;
    }

    if (a.type === "style") {
      return 1;
    } else if (b.type === "style") {
      return -1;
    }

    return 0;
  });

  replaceHeadComponents(headComponents);
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
