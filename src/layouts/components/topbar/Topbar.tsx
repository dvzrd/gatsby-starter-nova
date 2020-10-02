import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import { Section, SectionProps } from "components";

import styles from "./Topbar.module.css";

export interface TopbarProps extends SectionProps {
  isHidden?: boolean;
  navLeft?: ReactNode;
  navLeftClassName?: string;
  navRight?: ReactNode;
  navRightClassName?: string;
}

export const Topbar: FC<TopbarProps> = ({
  as = "header",
  children,
  className,
  containerClassName = "flex justify-between",
  isHidden = false,
  navLeft,
  navLeftClassName,
  navRight,
  navRightClassName,
}) => {
  if (isHidden) return null;

  return (
    <Section
      as={as}
      className={classNames(styles.header, className)}
      containerClassName={containerClassName}
    >
      {navLeft && (
        <nav className={classNames(styles.nav, navLeftClassName)}>
          {navLeft}
        </nav>
      )}
      {children}
      {navRight && (
        <nav
          className={classNames(styles.nav, "justify-end", navRightClassName)}
        >
          {navRight}
        </nav>
      )}
    </Section>
  );
};
