import React, { FC } from "react";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

import styles from "./Grid.module.css";

export type GridPattern = "default" | "flex" | "masonry";

export interface GridProps extends PatternProps {
  pattern?: GridPattern;
}

export const Grid: FC<GridProps> = ({
  children,
  className,
  is = "grid",
  pattern = "default",
  ...rest
}) => (
  <Pattern
    is={is}
    {...(rest as PatternProps)}
    className={classNames(styles[pattern], className)}
  >
    {children}
  </Pattern>
);
