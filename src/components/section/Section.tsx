import React, { FC } from "react";
import classNames from "classnames";

import { Element, ElementProps } from "components";

import styles from "./Section.module.css";

export type SectionPattern = "content" | "feature" | "hero";

export interface SectionProps extends ElementProps {
  container?: ElementProps;
  pattern?: SectionPattern;
}

export const sectionDefaultProps: SectionProps = {
  as: "section",
  className: "text-copy",
  container: {
    as: "figure",
  },
};

export const Section: FC<SectionProps> = ({
  as,
  children,
  className,
  container,
  pattern,
}) => (
  <Element
    as={as || sectionDefaultProps.as}
    className={classNames(
      className,
      styles.section,
      pattern === "content" && styles.content,
      pattern === "feature" && styles.feature,
      pattern === "hero" && styles.hero
    )}
  >
    <Element
      {...sectionDefaultProps.container}
      {...container}
      className={classNames("container", container?.className)}
    >
      {children}
    </Element>
  </Element>
);
