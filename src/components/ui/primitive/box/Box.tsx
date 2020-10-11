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
}) => {
  const getBoxClassnames = () => {
    let boxClasses = "";

    // TODO: refactor this monstrosity LOL
    // - create a util method to convert prop values to a className.
    // - strip boxClasses from any unwanted characters and spaces.
    if (bgColor || backgroundColor) boxClasses = `bg-background-${bgColor}`;
    if (color) boxClasses = boxClasses = `${boxClasses} text-color-${color}`;
    if (minH || minHeight)
      boxClasses = `${boxClasses} min-h-${minH || minHeight}`;
    if (h || height) boxClasses = `${boxClasses} h-${h || height}`;
    if (maxW || maxWidth)
      boxClasses = `${boxClasses} max-w-${maxW || maxWidth}`;
    if (w || width) boxClasses = `${boxClasses} w-${w || width}`;

    return boxClasses;
  };

  return (
    <Element
      as={as}
      {...rest}
      className={classNames(getBoxClassnames(), className)}
    >
      {children}
    </Element>
  );
};
