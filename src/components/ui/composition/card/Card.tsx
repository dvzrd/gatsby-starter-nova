import React, { FC } from "react";
import classNames from "classnames";

import { Box, BoxProps } from "components";

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
  <Box
    is={is}
    {...(rest as BoxProps)}
    className={classNames(
      "overflow-hidden relative border-2 xl:border-3 text-paper p-4 md:p-6 xl:p-8",
      className
    )}
  >
    {children}
  </Box>
);
