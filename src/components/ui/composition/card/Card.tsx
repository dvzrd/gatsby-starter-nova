import React, { FC } from "react";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

export type CardPattern = "default";

export interface CardProps extends PatternProps {
  pattern?: CardPattern;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  is = "card",
  pattern = "default",
  ...rest
}) => (
  <Pattern
    is={is}
    {...(rest as PatternProps)}
    className={classNames(
      "border-2 xl:border-3 text-paper p-4 md:p-6 xl:p-8",
      className
    )}
  >
    {children}
  </Pattern>
);
