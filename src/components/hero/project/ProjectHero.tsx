import React, { FC } from "react";
import classNames from "classnames";

import {
  Hero,
  HeroProps,
  HeroPattern,
  HeroCaptionProps,
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
  const captionProps: HeroCaptionProps = {
    ...caption,
    className: classNames(styles.caption, caption?.className),
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
      className={classNames(styles.hero, className)}
    >
      {children}
    </Hero>
  );
};
