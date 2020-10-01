import React, { FC } from "react";
import classNames from "classnames";

import { Section } from "components";

import styles from "./Topbar.module.css";
import { TopbarProps } from "./types";

export const Topbar: FC<TopbarProps> = ({
  as = "header",
  children,
  className,
  containerClassName = "flex justify-between",
  navLeft,
  navLeftClassName,
  navRight,
  navRightClassName,
}) => (
  <Section
    as={as}
    className={classNames(styles.header, className)}
    containerClassName={containerClassName}
  >
    {navLeft && (
      <nav className={classNames(styles.nav, navLeftClassName)}>{navLeft}</nav>
    )}
    {children}
    {navRight && (
      <nav className={classNames(styles.nav, "justify-end", navRightClassName)}>
        {navRight}
      </nav>
    )}
  </Section>
);
