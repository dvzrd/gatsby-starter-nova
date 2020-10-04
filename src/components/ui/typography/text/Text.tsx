import React, { FC } from "react";
import classNames from "classnames";

import { BaseElement as Element, ElementProps } from "components";

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

export interface TextProps<Text extends HTMLElement = HTMLSpanElement>
  extends Omit<ElementProps<Text>, "height" | "size"> {
  pattern?: TextPattern;
}

export const Text: FC<TextProps> = ({
  as = "span",
  children,
  className,
  pattern,
}) => (
  <Element as={as} className={classNames("text", pattern, className)}>
    {children}
  </Element>
);
