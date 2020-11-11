import React, { FC } from "react";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

import styles from "./Grid.module.css";
import {
  GridAuto,
  GridAutoFlow,
  GridGap,
  GridPattern,
  GridType,
} from "./types";

export interface GridProps extends PatternProps {
  autoCols?: GridAuto;
  autoFlow?: GridAutoFlow;
  autoRows?: GridAuto;
  col?: GridType;
  cols?: GridType;
  gap?: GridGap;
  gapX?: GridGap;
  gapY?: GridGap;
  pattern?: GridPattern;
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
  is = "grid",
  pattern = "default",
  row,
  rows,
  ...rest
}) => (
  <Pattern
    is={is}
    {...(rest as PatternProps)}
    className={classNames(
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
      pattern === "flex" ? pattern : styles[pattern],
      className
    )}
  >
    {children}
  </Pattern>
);
