import React, { FC } from "react";
import clsx from "clsx";

import { Box, BoxProps } from "components";

import styles from "./Card.module.css";

export type CardPattern = "bordered" | "default";

export interface CardProps extends BoxProps {
  is?: CardPattern;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  is = "default",
  ...rest
}) => (
  <Box {...(rest as BoxProps)} className={clsx(styles[is], className)}>
    {children}
  </Box>
);
