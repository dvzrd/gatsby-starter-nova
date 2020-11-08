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

export type TextSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

export interface TextProps<Text extends HTMLElement = HTMLDivElement>
  extends PatternProps<Text> {
  pattern?: TextPattern;
}

export const getTextSize = (size: TextSize) => {
  switch (size) {
    case "xs":
      return "caption" as TextPattern;
    case "sm":
      return "meta" as TextPattern;
    case "lg":
      return "subtitle" as TextPattern;
    case "xl":
      return "subheading" as TextPattern;
    case "2xl":
      return "title" as TextPattern;
    case "3xl":
      return "heading" as TextPattern;
    case "4xl":
      return "hero" as TextPattern;
    case "5xl":
      return "legend" as TextPattern;
    case "md":
    default:
      return "body" as TextPattern;
  }
};

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
