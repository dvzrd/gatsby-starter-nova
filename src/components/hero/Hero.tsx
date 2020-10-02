import React, { FC } from "react";
import classNames from "classnames";

import { Section, SectionProps } from "components";

import styles from "./Hero.module.css";

export const Hero: FC<SectionProps> = ({
  as = "header",
  children,
  className,
  containerClassName,
}) => (
  <Section
    as={as}
    className={classNames(styles.header, className)}
    containerClassName={containerClassName}
  >
    {children}
  </Section>
);
