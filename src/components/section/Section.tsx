import React, { FC } from "react";
import classNames from "classnames";

import { Element, ElementProps } from "components";

import styles from "./Section.module.css";

export type SectionDesignPattern = "feature" | "hero";

export interface SectionProps extends ElementProps {
  containerClassName?: string;
  designPattern?: SectionDesignPattern;
}

export const Section: FC<SectionProps> = ({
  as = "section",
  children,
  className,
  containerClassName,
  designPattern,
}) => (
  <Element
    as={as}
    className={classNames(
      className,
      styles.section,
      designPattern === "hero" && styles.hero
    )}
  >
    <figure className={classNames("container", containerClassName)}>
      {children}
    </figure>
  </Element>
);
