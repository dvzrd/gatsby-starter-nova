import React, { FC } from "react";
import clsx from "clsx";

import { Box, BoxProps } from "components";

import styles from "./Wrapper.module.css";

export type ContainerPattern = "content" | "fluid" | "wide";

export interface ContainerProps extends BoxProps {
  is?: ContainerPattern;
}

export const Container: FC<ContainerProps> = ({
  as = "figure",
  children,
  className,
  is,
  ...rest
}) => (
  <Box
    as={as}
    {...(rest as BoxProps)}
    className={clsx("container", is && styles[is], className)}
  >
    {children}
  </Box>
);
