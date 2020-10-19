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
  pattern?: SectionPattern;
}

export const Section: FC<SectionProps> = ({
  as = "section",
  children,
  className,
  container,
  is = "section",
  of,
  on,
  pattern = "content",
  ...rest
}) => {
  return (
    <Pattern
      as={as}
      is={is}
      of={of}
      on={on}
      {...rest}
      className={classNames(styles.section, styles[pattern], className)}
    >
      <Pattern as="figure" is="container" {...container}>
        {children}
      </Pattern>
    </Pattern>
  );
};
