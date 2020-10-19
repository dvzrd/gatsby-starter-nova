import React, { FC } from "react";
import classNames from "classnames";

import { Box, BoxProps } from "components";

// TODO:
// - move 'contained' util to section component as prop config

export type PatternType =
  | "container"
  | "divider"
  | "main"
  | "nav"
  | "section"
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
  is?: PatternType; // type of pattern
  of?: PatternUtil; // type of utility pattern
  on?: string; // type of parent pattern
  utils?: string; // optional utils (tailwind and custom classes)
}

export const Pattern: FC<PatternProps> = ({
  as = "div",
  children,
  className,
  is,
  of,
  on,
  utils,
  ...rest
}) => {
  const getPattern = () => {
    switch (is) {
      case "divider":
        return "divide-y divide-gray-500 my-2";
      case "main":
        return "flex-1";
      case "nav":
        return "content-center flex flex-1 items-center";
      case "section":
        return "content-start flex items-stretch justify-start overflow-hidden py-4 relative text-color";
      case "wrapper":
        return "bg-background flex flex-col";
      case "container":
      default:
        return is;
    }
  };

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
      className={classNames(getPattern(), getUtils(), on, className, utils)}
      data-pattern-is={is}
      data-pattern-of={of}
      data-pattern-on={on}
    >
      {children}
    </Box>
  );
};
