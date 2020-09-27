import React, { FC } from "react";
import classNames from "classnames";

import { Element, ElementProps } from "@/components";

import styles from "./Hero.module.css";

export interface HeroProps extends ElementProps {
  containerClassName?: string;
}

export const Hero: FC<HeroProps> = ({
  as = "header",
  children,
  className,
  containerClassName,
}) => (
  <Element as={as} className={classNames(styles.hero, className)}>
    <figure className={classNames("container", containerClassName)}>
      {children}
    </figure>
  </Element>
);
