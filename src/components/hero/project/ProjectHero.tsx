import React, { FC } from "react";
import clsx from "clsx";

import {
  CaptionProps,
  Hero,
  HeroProps,
  HeroPattern,
  MediaProps,
} from "components";

import styles from "./ProjectHero.module.css";

export interface ProjectHeroProps extends Omit<HeroProps, "is"> {
  hero?: HeroPattern;
}

export const ProjectHero: FC<ProjectHeroProps> = ({
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
    is: "image",
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
