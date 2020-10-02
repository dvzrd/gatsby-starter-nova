import React, { FC } from "react";
import classNames from "classnames";

import { Element, ElementProps } from "components";

import styles from "./Section.module.css";

export type SectionPattern = "content" | "feature" | "hero";

export interface SectionProps extends ElementProps {
  containerClassName?: string;
  pattern?: SectionPattern;
}

export const Section: FC<SectionProps> = ({
  as = "section",
  children,
  className,
  containerClassName,
  pattern,
}) => (
  <Element
    as={as}
    className={classNames(
      className,
      styles.section,
      pattern === "content" && styles.content,
      pattern === "feature" && styles.feature,
      pattern === "hero" && styles.hero
    )}
  >
    <figure className={classNames("container", containerClassName)}>
      {children}
    </figure>
  </Element>
);
