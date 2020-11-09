import React, { FC } from "react";
import classNames from "classnames";

import { Box, BoxProps } from "components";

import styles from "./Flex.module.css";

export type FlexDirection = "col" | "col-reverse" | "row" | "row-reverse";

export type FlexFlow =
  | "col-no-wrap"
  | "col-reverse-no-wrap"
  | "col-wrap"
  | "col-reverse-wrap"
  | "col-wrap-reverse"
  | "col-reverse-wrap-reverse"
  | "row-no-wrap"
  | "row-reverse-no-wrap"
  | "row-wrap"
  | "row-reverse-wrap"
  | "row-wrap-reverse"
  | "row-reverse-wrap-reverse";

export type FlexType = "1" | "auto" | "initial" | "none" | number | string;

export type FlexWrap = "no-wrap" | "wrap" | "wrap-reverse";

export interface FlexProps<Flex extends HTMLElement = HTMLDivElement>
  extends BoxProps<Flex> {
  direction?: FlexDirection;
  flex?: FlexType;
  flow?: FlexFlow;
  grow?: boolean;
  order?: number | string;
  shrink?: boolean;
  wrap?: FlexWrap;
}

export const Flex: FC<FlexProps> = ({
  as = "div",
  children,
  className,
  direction,
  flex = "initial",
  flow = "col-no-wrap",
  grow,
  order,
  shrink,
  wrap,
  ...rest
}) => (
  <Box
    as={as}
    {...(rest as BoxProps)}
    className={classNames(
      styles.flex,
      direction && `flex-${direction}`,
      wrap && `flex-${wrap}`,
      grow && grow ? "flex-grow" : "flex-grow-0",
      shrink && shrink ? "flex-shrink" : "flex-shrink-0",
      order && `order-${order}`,
      flex && `flex-${flex}`,
      styles[flow],
      className
    )}
  >
    {children}
  </Box>
);
