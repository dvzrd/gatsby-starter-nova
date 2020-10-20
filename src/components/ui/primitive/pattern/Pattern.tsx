import React, { FC } from "react";
import classNames from "classnames";

import { Box, BoxProps } from "components";

import styles from "./Pattern.module.css";

export type PatternType =
  | "container"
  | "divider"
  | "main"
  | "nav"
  | "section"
  | "text"
  | "wrapper"
  | string;

export type PatternUtil =
  | "clear"
  | "clear-bottom"
  | "clear-left"
  | "clear-right"
  | "clear-top"
  | "compact"
  | "contained"
  | "divide"
  | "divide-bottom"
  | "divide-left"
  | "divide-right"
  | "divide-top"
  | "fluid"
  | "full"
  | string;

export interface PatternProps extends BoxProps {
  is?: PatternType; // a type of design pattern.
  of?: PatternUtil; // all types of utility design patterns.
  on?: string; // a type of parent class name.
  utils?: string; // all types of tailwind and/or custom css classes.
}

export const Pattern: FC<PatternProps> = ({
  as = "div",
  children,
  className,
  is = "wrapper",
  of,
  on,
  utils,
  ...rest
}) => {
  const getUtils = () => {
    const utils = of?.split(" ");
    let patterns: string[] = [];

    utils?.forEach((util) => {
      switch (util) {
        case "clear":
          patterns.push("my-4 py-4 md:my-6 md:py-6 xl:my-8 xl:py-8");
          break;
        case "clear-bottom":
          patterns.push("mb-4 pb-4 md:mb-6 md:pb-6 xl:mb-8 xl:pb-8");
          break;
        case "clear-left":
          patterns.push("md:pl-8 xl:pl-16");
          break;
        case "clear-right":
          patterns.push("md:pr-8 xl:pr-16");
          break;
        case "clear-top":
          patterns.push("mt-4 pt-4 md:mt-6 md:pt-6 xl:mt-8 xl:pt-8");
          break;
        case "contained":
          patterns.push("contained");
          break;
        case "divide":
          patterns.push("bg-gray-500 mx-auto my-1 py-2 w-full");
          break;
        case "divide-bottom":
          patterns.push("border-b-2 border-gray-500 border-solid");
          break;
        case "divide-left":
          patterns.push("md:border-l-2 md:border-gray-500 md:border-solid");
          break;
        case "divide-right":
          patterns.push("md:border-r-2 md:border-gray-500 md:border-solid");
          break;
        case "divide-top":
          patterns.push("border-t-2 border-gray-500 border-solid");
          break;
        case "fluid":
          patterns.push("fluid");
          break;
        default:
          break;
      }
    });

    return [...patterns];
  };

  return (
    <Box
      as={as}
      {...rest}
      className={classNames(
        styles[is],
        { container: is === "container" },
        getUtils(),
        on,
        className,
        utils
      )}
      data-pattern-is={is}
      data-pattern-of={of}
      data-pattern-on={on}
    >
      {children}
    </Box>
  );
};
