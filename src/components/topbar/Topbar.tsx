import React, { FC } from "react";
import classNames from "classnames";

import { Element, ElementProps } from "@/components";

import styles from "./Topbar.module.css";

interface TopbarProps extends ElementProps {
  containerClassName?: string;
}

export const Topbar: FC<TopbarProps> = ({
  as = "header",
  children,
  className,
  containerClassName,
}) => (
  <Element as={as} className={classNames(styles.topbar, className)}>
    <figure className={classNames("container", containerClassName)}>
      {children}
    </figure>
  </Element>
);
