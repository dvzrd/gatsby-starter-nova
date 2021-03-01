import React, { FC } from "react";
import clsx from "clsx";
import { animated, useSpring, config } from "react-spring";

import {
  BoxProps,
  CaptionProps,
  Hero,
  HeroProps,
  HeroPattern,
  MediaProps,
} from "components";
import { Spring } from "types";

import styles from "./PageHero.module.css";

export type PageHeroPattern = "article" | "default" | "landing";

export interface PageHeroProps extends Omit<HeroProps, "is"> {
  hero?: HeroPattern;
  is?: PageHeroPattern;
  spring?: any;
}

export const getPageHeroVerticalHeight = (pattern: PageHeroPattern) => {
  switch (pattern) {
    case "article":
      return "2/3";
    case "landing":
      return "full";
    case "default":
      return "1/2";
    default:
      return "auto";
  }
};

export const PageHero: FC<PageHeroProps> = ({
  caption,
  children,
  className,
  container,
  hero = "page",
  is = "default",
  media,
  spring,
  vh,
  ...rest
}) => {
  const springProps: Spring = {
    config: config.stiff,
    from: { opacity: 0, transform: "translate3d(0, 50%, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    ...spring,
  };

  const containerProps: BoxProps = {
    ...container,
    className: clsx(
      is === "landing" && styles.landingContainer,
      container?.className
    ),
  };

  const captionProps: CaptionProps = {
    order: 1,
    ...caption,
  };

  const mediaProps: MediaProps = {
    as: animated.div,
    style: useSpring(springProps),
    ...media,
    className: clsx(styles.media, media?.className),
  };

  return (
    <Hero
      is={hero}
      vh={vh || getPageHeroVerticalHeight(is)}
      {...(rest as HeroProps)}
      caption={captionProps}
      container={containerProps}
      media={media && mediaProps}
      className={clsx(
        is && styles[is],
        media ? "justify-end" : "justify-center",
        className
      )}
    >
      {children}
    </Hero>
  );
};
