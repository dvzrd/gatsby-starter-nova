import React, { FC } from "react";
import classNames from "classnames";

import { BaseElement as Element, ElementProps } from "components";

export type BoxDimension = number | string;
export type BoxColor = string;

export interface BoxProps<Box extends HTMLElement = HTMLDivElement>
  extends Omit<ElementProps<Box>, "background" | "color" | "height" | "width"> {
  bgColor?: BoxColor;
  backgroundColor?: BoxColor;
  color?: BoxColor;
  minH?: BoxDimension;
  minHeight?: BoxDimension;
  h?: BoxDimension;
  height?: BoxDimension;
  maxW?: BoxDimension;
  maxWidth?: BoxDimension;
  w?: BoxDimension;
  width?: BoxDimension;
}

export const Box: FC<BoxProps> = ({
  as = "div",
  bgColor,
  backgroundColor,
  children,
  className,
  color,
  minH,
  minHeight,
  h,
  height,
  maxW,
  maxWidth,
  w,
  width,
  ...rest
}) => (
  <Element
    as={as}
    {...rest}
    className={classNames(
      (bgColor || backgroundColor) &&
        `bg-background-${bgColor || backgroundColor}`,
      color && `text-color-${color}`,
      (minH || minHeight) && `min-h-${minH || minHeight}`,
      (h || height) && `h-${h || height}`,
      (maxW || maxWidth) && `max-w-${maxW || maxWidth}`,
      (w || width) && `w-${w || width}`,
      className
    )}
  >
    {children}
  </Element>
);
