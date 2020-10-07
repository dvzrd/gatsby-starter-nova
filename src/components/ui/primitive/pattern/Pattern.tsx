import React, { FC } from "react";
import classNames from "classnames";

import { BaseElement as Element, ElementProps } from "components";

export type PatternType =
  | "container"
  | "footer"
  | "header"
  | "layout"
  | "main"
  | "navbar"
  | "section"
  | "topbar"
  | "wrapper";

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
  | "divide-top";

export interface PatternProps<Pattern extends HTMLElement = HTMLDivElement>
  extends Omit<ElementProps<Pattern>, "is" | "of" | "on"> {
  is?: PatternType | string; // type of pattern [less important]
  of?: PatternUtil | string; // type of utility pattern [important]
  on?: PatternType | string; // type of parent pattern [more important]
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
  <Element as={as} {...rest} className={classNames(is, of, on, className)}>
    {children}
  </Element>
);
