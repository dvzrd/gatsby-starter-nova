import React, { FC } from "react";
import classNames from "classnames";

import { Element, ElementProps } from "components";

import {
  AlignContent,
  AlignItems,
  AlignSelf,
  BoxColor,
  BoxDisplay,
  BoxDimension,
  BoxInset,
  BoxPosition,
  BoxSizing,
  FlexDirection,
  FlexFlow,
  FlexGrow,
  FlexShrink,
  FlexType,
  FlexWrap,
  PlaceContent,
} from "./types";

export interface BoxProps<Element extends HTMLElement = HTMLDivElement>
  extends Omit<
    ElementProps<Element>,
    | "align"
    | "background"
    | "cols"
    | "color"
    | "height"
    | "rows"
    | "size"
    | "width"
    | "wrap"
  > {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  bgColor?: BoxColor;
  backgroundColor?: BoxColor;
  color?: BoxColor;
  direction?: FlexDirection;
  display?: BoxDisplay;
  flex?: FlexType;
  flow?: FlexFlow;
  grow?: FlexGrow;
  h?: BoxDimension;
  height?: BoxDimension;
  inset?: BoxInset;
  justifyContent?: AlignContent;
  justifyItems?: AlignSelf;
  justifySelf?: AlignSelf;
  maxW?: BoxDimension;
  maxWidth?: BoxDimension;
  minH?: BoxDimension;
  minHeight?: BoxDimension;
  order?: number | string;
  placeContent?: PlaceContent;
  placeItems?: AlignSelf;
  placeSelf?: AlignSelf;
  position?: BoxPosition;
  shrink?: FlexShrink;
  sizing?: BoxSizing;
  w?: BoxDimension;
  width?: BoxDimension;
  wrap?: FlexWrap;
}

export const Box: FC<BoxProps> = ({
  alignContent,
  alignItems,
  alignSelf,
  as = "div",
  bgColor,
  backgroundColor,
  children,
  className,
  color,
  direction,
  display,
  flex,
  flow,
  grow,
  h,
  height,
  inset,
  justifyContent,
  justifyItems,
  justifySelf,
  maxW,
  maxWidth,
  minH,
  minHeight,
  order,
  placeContent,
  placeItems,
  placeSelf,
  position,
  shrink,
  sizing,
  w,
  width,
  wrap,
  ...rest
}) => (
  <Element
    as={as}
    {...(rest as ElementProps)}
    className={classNames(
      (bgColor || backgroundColor) && `bg-${bgColor || backgroundColor}`,
      color && `text-${color}`,
      display,
      (minH || minHeight) && `min-h-${minH || minHeight}`,
      (h || height) && `h-${h || height}`,
      inset && `inset-${inset}`,
      (maxW || maxWidth) && `max-w-${maxW || maxWidth}`,
      position,
      sizing && `box-${sizing}`,
      (w || width) && `w-${w || width}`,
      // Alignment styles
      alignContent && `content-${alignContent}`,
      alignItems && `items-${alignItems}`,
      alignSelf && `self-${alignSelf}`,
      justifyContent && `justify-${justifyContent}`,
      justifyItems && `justify-items-${justifyItems}`,
      justifySelf && `justify-self-${justifySelf}`,
      placeContent && `place-content-${placeContent}`,
      placeItems && `place-items-${placeItems}`,
      placeSelf && `place-self-${placeSelf}`,
      // Flex styles
      direction && `flex-${direction}`,
      wrap && `flex-${wrap}`,
      grow && (grow === "default" ? "flex-grow" : `flex-grow-${grow}`),
      shrink &&
        (shrink === "default" ? "flex-shrink" : `flex-shrink-${shrink}`),
      order && `order-${order}`,
      flex && `flex flex-${flex}`,
      {
        "flex-col flex-no-wrap": flow === "col-no-wrap",
        "flex-col-reverse flex-no-wrap": flow === "col-reverse-no-wrap",
        "flex-col flex-wrap": flow === "col-wrap",
        "flex-col-reverse flex-wrap": flow === "col-reverse-wrap",
        "flex-col flex-wrap-reverse": flow === "col-wrap-reverse",
        "flex-col-reverse flex-wrap-reverse":
          flow === "col-reverse-wrap-reverse",
        "flex-row flex-no-wrap": flow === "row-no-wrap",
        "flex-row-reverse flex-no-wrap": flow === "row-reverse-no-wrap",
        "flex-row flex-wrap": flow === "row-wrap",
        "flex-row-reverse flex-wrap": flow === "row-reverse-wrap",
        "flex-row flex-wrap-reverse": flow === "row-wrap-reverse",
        "flex-row-reverse flex-wrap-reverse":
          flow === "row-reverse-wrap-reverse",
      },
      className
    )}
  >
    {children}
  </Element>
);
