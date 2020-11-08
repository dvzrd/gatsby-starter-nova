import React, { FC } from "react";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

import styles from "./Text.module.css";

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
  pattern?: TextPattern;
}

export const Text: FC<TextProps> = ({
  as = "span",
  children,
  className,
  is = "text",
  pattern = "body",
  ...rest
}) => (
  <Pattern
    as={as}
    is={is}
    {...(rest as PatternProps)}
    className={classNames(styles[pattern], className)}
  >
    {children}
  </Pattern>
);
