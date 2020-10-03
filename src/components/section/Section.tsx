import React, { FC } from "react";
import classNames from "classnames";

import { Element, ElementProps } from "components";

import styles from "./Section.module.css";

export type SectionPattern = "contained" | "content" | "feature" | "hero";

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
  ...rest
}) => {
  return (
    <Element
      as={as}
      className={classNames(
        className,
        styles.section,
        pattern === "content" && styles.content,
        pattern === "feature" && styles.feature,
        pattern === "hero" && styles.hero
      )}
      {...rest}
    >
      <Element
        {...sectionDefaultProps.container}
        {...container}
        className={classNames("container", container?.className, {
          "p-0": pattern === "contained",
        })}
      >
        {children}
      </Element>
    </Element>
  );
};

Section.defaultProps = sectionDefaultProps;
