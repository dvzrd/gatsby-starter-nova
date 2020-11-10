import React, { FC } from "react";
import classNames from "classnames";

import { Box, BoxProps } from "components";

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

export type FlexGrow = "default" | "0";

export type FlexShrink = "default" | "0";

export type FlexType = "1" | "auto" | "initial" | "none";

export type FlexWrap = "no-wrap" | "wrap" | "wrap-reverse";

export interface FlexProps<Flex extends HTMLElement = HTMLDivElement>
  extends BoxProps<Flex> {
  direction?: FlexDirection;
  flex?: FlexType;
  flow?: FlexFlow;
  grow?: FlexGrow;
  order?: number | string;
  shrink?: FlexShrink;
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
      "flex",
      direction && `flex-${direction}`,
      wrap && `flex-${wrap}`,
      grow && (grow === "default" ? "flex-grow" : `flex-grow-${grow}`),
      shrink &&
        (shrink === "default" ? "flex-shrink" : `flex-shrink-${shrink}`),
      order && `order-${order}`,
      flex && `flex-${flex}`,
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
  </Box>
);
