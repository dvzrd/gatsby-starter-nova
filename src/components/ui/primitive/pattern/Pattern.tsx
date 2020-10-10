import React, { FC } from "react";
import classNames from "classnames";

import { Box, BoxProps } from "components";

export type PatternType =
  | "container"
  | "footer"
  | "header"
  | "layout"
  | "main"
  | "navbar"
  | "section"
  | "topbar"
  | "wrapper"
  | string;

export type PatternUtil =
  | "clear"
  | "clear-bottom"
  | "clear-left"
  | "clear-right"
  | "clear-top"
  | "contained"
  | "divide"
  | "divide-bottom"
  | "divide-left"
  | "divide-right"
  | "divide-top"
  | string;

export interface PatternProps extends BoxProps {
  is?: PatternType; // type of pattern [less important]
  of?: PatternUtil; // type of utility pattern [important]
  on?: PatternType; // type of parent pattern [more important]
}

export const Pattern: FC<PatternProps> = ({
  as = "div",
  children,
  className,
  is,
  of,
  on,
  ...rest
}) => (
  <Box as={as} {...rest} className={classNames(is, of, on, className)}>
    {children}
  </Box>
);
