import React, { FC } from "react";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

export type TextPattern =
  | "body"
  | "caption"
  | "heading"
  | "hero"
  | "legend"
  | "meta"
  | "subheading"
  | "subtitle"
  | "title";

export interface TextProps extends PatternProps {
  is?: TextPattern;
}

export const Text: FC<TextProps> = ({
  as = "span",
  children,
  className,
  is = "body",
  of,
  on,
  ...rest
}) => (
  <Pattern as={as} {...rest} className={classNames(`text-${is}`, className)}>
    {children}
  </Pattern>
);
