import React, { FC } from "react";
import classNames from "classnames";

import { Element, ElementProps } from "components";

import styles from "./Section.module.css";

export interface SectionProps extends ElementProps {
  containerClassName?: string;
}

export const Section: FC<SectionProps> = ({
  as = "section",
  children,
  className,
  containerClassName,
}) => (
  <Element as={as} className={classNames(styles.section, className)}>
    <figure className={classNames("container", containerClassName)}>
      {children}
    </figure>
  </Element>
);
