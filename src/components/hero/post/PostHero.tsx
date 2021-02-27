import React, { FC } from "react";
import clsx from "clsx";

import {
  CaptionProps,
  Hero,
  HeroProps,
  HeroPattern,
  MediaProps,
} from "components";

import styles from "./PostHero.module.css";

export interface PostHeroProps extends Omit<HeroProps, "is"> {
  hero?: HeroPattern;
}

export const PostHero: FC<PostHeroProps> = ({
  caption,
  children,
  className,
  hero = "page",
  media,
  vh = "3/4",
  ...rest
}) => {
  const captionProps: CaptionProps = {
    ...caption,
    className: clsx(styles.caption, caption?.className),
  };

  const mediaProps: MediaProps = {
    mod: "background gradient",
    ...media,
  };

  return (
    <Hero
      caption={captionProps}
      media={mediaProps}
      is={hero}
      vh={vh}
      {...(rest as HeroProps)}
      className={clsx(styles.hero, className)}
    >
      {children}
    </Hero>
  );
};
