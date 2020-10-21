import React, { FC } from "react";
import classNames from "classnames";

import { Element, ElementProps } from "components";

export type BoxColor = string;

export type BoxDimension = number | string;

export type BoxDisplay =
  | "block"
  | "inline-block"
  | "inline"
  | "flex"
  | "inline-flex"
  | string;

export type BoxInset =
  | "0"
  | "1/4"
  | "1/3"
  | "1/2"
  | "2/3"
  | "3/4"
  | "auto"
  | "full"
  | "x-0"
  | "x-1/4"
  | "x-1/3"
  | "x-1/2"
  | "x-2/3"
  | "x-3/4"
  | "x-auto"
  | "y-0"
  | "y-1/4"
  | "y-1/3"
  | "y-1/2"
  | "y-2/3"
  | "y-3/4"
  | "y-auto";

export type BoxPosition =
  | "absolute"
  | "fixed"
  | "relative"
  | "static"
  | "sticky";

export type BoxSizing = "border" | "content";

export interface BoxProps<Box extends HTMLElement = HTMLDivElement>
  extends Omit<ElementProps<Box>, "background" | "color" | "height" | "width"> {
  bgColor?: BoxColor;
  backgroundColor?: BoxColor;
  color?: BoxColor;
  display?: BoxDisplay;
  h?: BoxDimension;
  height?: BoxDimension;
  inset?: BoxInset;
  maxW?: BoxDimension;
  maxWidth?: BoxDimension;
  minH?: BoxDimension;
  minHeight?: BoxDimension;
  position?: BoxPosition;
  sizing?: BoxSizing;
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
  display,
  h,
  height,
  inset,
  maxW,
  maxWidth,
  minH,
  minHeight,
  position,
  sizing,
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
      display,
      (minH || minHeight) && `min-h-${minH || minHeight}`,
      (h || height) && `h-${h || height}`,
      inset && `inset-${inset}`,
      (maxW || maxWidth) && `max-w-${maxW || maxWidth}`,
      position,
      sizing && `box-${sizing}`,
      (w || width) && `w-${w || width}`,
      className
    )}
  >
    {children}
  </Element>
);
