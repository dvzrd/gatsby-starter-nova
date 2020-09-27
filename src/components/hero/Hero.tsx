import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Hero.module.css";

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

export const Hero: FC<HeroProps> = ({
  children,
  className,
  containerClassName,
}) => (
  <header className={classNames(styles.hero, className)}>
    <figure className={classNames("container", containerClassName)}>
      {children}
    </figure>
  </header>
);
