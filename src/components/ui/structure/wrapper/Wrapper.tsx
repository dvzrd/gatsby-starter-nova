import React, { FC } from "react";
import clsx from "clsx";

import { Box, BoxProps } from "components";

import styles from "./Wrapper.module.css";

export type WrapperColor = "default" | "primary" | "secondary";

export type WrapperPattern = "col" | "row";

export interface WrapperProps extends BoxProps {
  color?: WrapperColor;
  is?: WrapperPattern;
}

export const Wrapper: FC<WrapperProps> = ({
  as = "section",
  children,
  className,
  color = "default",
  is,
  ...rest
}) => (
  <Box
    as={as}
    {...(rest as BoxProps)}
    className={clsx(color && styles[color], is && styles[is], className)}
  >
    {children}
  </Box>
);
