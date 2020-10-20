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

export type PatternUtil = "compact" | "fluid" | "full" | string;

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
}) => (
  <Box
    as={as}
    {...rest}
    className={classNames(
      is === "container" ? is : styles[is],
      [of?.split(" ").map((util) => styles[util])],
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
