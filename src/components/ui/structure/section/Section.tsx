import React, { FC } from "react";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

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

export interface SectionProps extends PatternProps {
  container?: PatternProps;
  isContained?: boolean;
  pattern?: SectionPattern;
}

export const Section: FC<SectionProps> = ({
  as = "section",
  children,
  className,
  container,
  is = "section",
  isContained,
  of,
  on,
  pattern = "content",
  ...rest
}) => (
  <Pattern
    as={as}
    is={is}
    of={of}
    on={on}
    {...(rest as PatternProps)}
    className={classNames(styles.default, styles[pattern], className)}
  >
    <Pattern
      as="figure"
      is={isContained ? undefined : "container"}
      {...(container as PatternProps)}
    >
      {children}
    </Pattern>
  </Pattern>
);
