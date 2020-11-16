import React, { FC } from "react";
import classNames from "classnames";

import { Box, BoxProps } from "components";

import styles from "./Pattern.module.css";

export type PatternType =
  | "box"
  | "button"
  | "card"
  | "container"
  | "divider"
  | "field"
  | "flex"
  | "footer"
  | "grid"
  | "header"
  | "icon"
  | "item"
  | "link"
  | "list"
  | "main"
  | "nav"
  | "section"
  | "text"
  | "wrapper"
  | string;

export type PatternMod = "col" | "compact" | "fluid" | "full" | "row" | string;

export interface PatternProps<Pattern extends HTMLElement = HTMLDivElement>
  extends Omit<BoxProps<Pattern>, "cols" | "rows" | "wrap"> {
  is?: PatternType; // a type of design pattern.
  of?: PatternMod; // all types of modifier design patterns.
  on?: string; // a type of parent class name.
  mod?: string; // all types of tailwind and/or custom css classes.
}

export const Pattern: FC<PatternProps> = ({
  as = "div",
  children,
  className,
  is = "box",
  of,
  on,
  mod,
  ...rest
}) => {
  const getPattern = () => {
    if (is === "container" || is === "flex") return is;
    return styles[is];
  };

  const getModifiers = () => [of?.split(" ").map((mod) => styles[mod])];

  return (
    <Box
      as={as}
      {...(rest as BoxProps)}
      className={classNames(getPattern(), getModifiers(), on, mod, className)}
      data-pattern-is={is}
      data-pattern-of={of}
      data-pattern-on={on}
    >
      {children}
    </Box>
  );
};
