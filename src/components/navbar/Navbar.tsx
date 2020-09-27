import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Navbar.module.css";

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

export const Navbar: FC<NavbarProps> = ({
  children,
  className,
  containerClassName,
}) => (
  <header className={classNames(styles.navbar, className)}>
    <figure className={classNames("container", containerClassName)}>
      {children}
    </figure>
  </header>
);
