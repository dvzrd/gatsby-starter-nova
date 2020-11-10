import React, { FC } from "react";
import classNames from "classnames";

import { Box, BoxProps } from "components";

import styles from "./Pattern.module.css";

export type PatternType =
  | "box"
  | "button"
  | "container"
  | "divider"
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
  extends BoxProps<Pattern> {
  is?: PatternType; // a type of design pattern.
  of?: PatternMod; // all types of modifier design patterns.
  on?: string; // a type of parent class name.
  mod?: string; // all types of tailwind and/or custom css classes.
}

// export interface PatternProps extends BoxProps {
//   is?: PatternType; // a type of design pattern.
//   of?: PatternMod; // all types of modifier design patterns.
//   on?: string; // a type of parent class name.
//   mod?: string; // all types of tailwind and/or custom css classes.
// }

export const Pattern: FC<PatternProps> = ({
  as = "div",
  children,
  className,
  is = "box",
  of,
  on,
  mod,
  ...rest
}) => (
  <Box
    as={as}
    {...(rest as BoxProps)}
    className={classNames(
      is === "container" ? is : styles[is],
      [of?.split(" ").map((mod) => styles[mod])],
      on,
      mod,
      className
    )}
    data-pattern-is={is}
    data-pattern-of={of}
    data-pattern-on={on}
  >
    {children}
  </Box>
);
