import React, { FC } from "react";
import classNames from "classnames";

import { BaseElement as Element, ElementProps } from "components";

export interface PatternProps<Pattern extends HTMLElement = HTMLDivElement>
  extends Omit<ElementProps<Pattern>, "is" | "of" | "on"> {
  is?: string; // type of pattern [less important]
  of?: string; // type of utility patterns [important]
  on?: string; // type of parent pattern [more important]
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
  <Element as={as} {...rest} className={classNames(of, is, on, className)}>
    {children}
  </Element>
);
