import React, { FC } from "react";
import clsx from "clsx";

import { Box, BoxProps } from "components";

import styles from "./Text.module.css";
import { TextPattern, TextSize } from "./types";

export interface TextProps<Text extends HTMLElement = HTMLDivElement>
  extends Omit<BoxProps<Text>, "to"> {
  is?: TextPattern;
  size?: TextSize;
}

export const getTextSize = (size: TextSize): TextPattern => {
  switch (size) {
    case "inherit":
      return "inherit";
    case "xs":
      return "caption";
    case "sm":
      return "meta";
    case "lg":
      return "subtitle";
    case "xl":
      return "subheading";
    case "2xl":
      return "title";
    case "3xl":
      return "heading";
    case "4xl":
      return "hero";
    case "5xl":
      return "legend";
    case "md":
    default:
      return "body";
  }
};

export const Text: FC<TextProps> = ({
  as = "span",
  children,
  className,
  is = "body",
  size,
  ...rest
}) => (
  <Box
    as={as}
    {...(rest as BoxProps)}
    className={clsx(
      styles.default,
      is && styles[is],
      size && styles[getTextSize(size as TextSize)],
      className
    )}
  >
    {children}
  </Box>
);
