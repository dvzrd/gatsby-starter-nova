import React, { FC } from "react";
import classNames from "classnames";

import { Element, ElementProps } from "components";

import styles from "./Section.module.css";

export type SectionPattern = "contained" | "content" | "feature" | "hero";

export interface SectionProps extends ElementProps {
  container?: ElementProps;
  pattern?: SectionPattern;
}

export const Section: FC<SectionProps> = ({
  as = "section",
  children,
  className = "text-copy",
  container,
  pattern,
  ...rest
}) => (
  <Element
    as={as}
    {...rest}
    className={classNames(
      className,
      styles.section,
      pattern === "content" && styles.content,
      pattern === "feature" && styles.feature,
      pattern === "hero" && styles.hero
    )}
  >
    <Element
      as="figure"
      {...container}
      className={classNames("container", container?.className, {
        "p-0": pattern === "contained",
      })}
    >
      {children}
    </Element>
  </Element>
);
