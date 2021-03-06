import React, { FC } from "react";
import classNames from "classnames";

import { Hero, HeroProps, HeroPattern, HeroCaptionProps } from "components";

import styles from "./PageHero.module.css";

export type PageHeroPattern = "article" | "default" | "landing";

export interface PageHeroProps extends Omit<HeroProps, "is"> {
  hero?: HeroPattern;
  is?: PageHeroPattern;
}

export const getPageHeroVerticalHeight = (pattern: PageHeroPattern) => {
  switch (pattern) {
    case "article":
      return "2/3";
    case "landing":
      return "5/6";
    case "default":
      return "3/4";
    default:
      return "auto";
  }
};

export const PageHero: FC<PageHeroProps> = ({
  caption,
  children,
  className,
  hero = "page",
  is = "default",
  vh,
  ...rest
}) => {
  const captionProps: HeroCaptionProps = {
    order: 1,
    ...caption,
    className: classNames(styles.caption, caption?.className),
  };

  return (
    <Hero
      caption={captionProps}
      is={hero}
      vh={vh || getPageHeroVerticalHeight(is)}
      {...(rest as HeroProps)}
      className={classNames(styles.hero, styles[is], className)}
    >
      {children}
    </Hero>
  );
};
