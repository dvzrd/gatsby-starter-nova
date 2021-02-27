import React, { FC } from "react";
import clsx from "clsx";

import { Box, BoxProps } from "components";

import styles from "./Grid.module.css";
import {
  GridAuto,
  GridAutoFlow,
  GridGap,
  GridPattern,
  GridType,
} from "./types";

export interface GridProps extends BoxProps {
  autoCols?: GridAuto;
  autoFlow?: GridAutoFlow;
  autoRows?: GridAuto;
  col?: GridType;
  cols?: GridType;
  gap?: GridGap;
  gapX?: GridGap;
  gapY?: GridGap;
  is?: GridPattern;
  row?: GridType;
  rows?: GridType;
}

export const Grid: FC<GridProps> = ({
  autoCols,
  autoFlow,
  autoRows,
  children,
  className,
  col,
  cols,
  gap,
  gapX,
  gapY,
  is = "default",
  row,
  rows,
  ...rest
}) => (
  <Box
    {...(rest as BoxProps)}
    className={clsx(
      autoCols && `auto-cols-${autoCols}`,
      autoFlow && `grid-flow-${autoFlow}`,
      autoRows && `auto-rows-${autoRows}`,
      col,
      cols,
      gap,
      gapX,
      gapY,
      row,
      rows,
      is === "flex" ? is : styles[is],
      className
    )}
  >
    {children}
  </Box>
);
