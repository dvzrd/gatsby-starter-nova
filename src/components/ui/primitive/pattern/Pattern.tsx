import React, { FC } from "react";
import classNames from "classnames";

import { BaseElement as Element, ElementProps } from "components";

export type Pattern =
  | "clear"
  | "clear-bottom"
  | "clear-top"
  | "divider"
  | "vertical-divider";

export interface PatternProps extends ElementProps {
  patterns?: Pattern[];
}

export const Pattern: FC<PatternProps> = ({
  as = "span",
  children,
  className,
  patterns,
  ...rest
}) => (
  <Element as={as} {...rest} className={classNames(className, [patterns])}>
    {children}
  </Element>
);
