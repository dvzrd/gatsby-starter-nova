import React, { FC } from "react";
import classNames from "classnames";

import { Box, BoxProps } from "components";

import styles from "./Section.module.css";

export type SectionPattern =
  | "content"
  | "cta"
  | "error"
  | "feature"
  | "form"
  | "heel"
  | "hero"
  | "navbar"
  | string;

export type SectionMod = "col" | "compact" | "fluid" | "full" | "row" | string;

export interface SectionProps extends BoxProps {
  container?: BoxProps;
  isContained?: boolean;
  is?: SectionPattern;
  mod?: SectionMod;
}

export const Section: FC<SectionProps> = ({
  as = "section",
  children,
  className,
  container,
  is = "content",
  isContained,
  mod,
  on,
  ...rest
}) => {
  const getModifiers = () => [mod?.split(" ").map((mod) => styles[mod])];

  return (
    <Box
      as={as}
      on={on}
      {...(rest as BoxProps)}
      className={classNames(
        styles.default,
        styles[is],
        getModifiers(),
        className
      )}
    >
      <Box
        as="figure"
        {...(container as BoxProps)}
        className={classNames(
          isContained ? undefined : "container",
          container?.className
        )}
      >
        {children}
      </Box>
    </Box>
  );
};
