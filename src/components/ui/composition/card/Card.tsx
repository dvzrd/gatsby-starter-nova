import React, { FC } from "react";
import classNames from "classnames";

import { Box, BoxProps } from "components";

import styles from "./Card.module.css";

export type CardPattern = "default";

export interface CardProps extends BoxProps {
  is?: CardPattern;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  is = "default",
  ...rest
}) => (
  <Box {...(rest as BoxProps)} className={classNames(styles[is], className)}>
    {children}
  </Box>
);
