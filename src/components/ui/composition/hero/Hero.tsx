import React, { FC } from "react";
import clsx from "clsx";

import {
  BoxProps,
  Caption,
  CaptionProps,
  Section,
  SectionProps,
} from "components";

import { HeroActions, HeroActionsProps } from "./components";
import styles from "./Hero.module.css";

export type HeroPattern =
  | "card"
  | "cta"
  | "footer"
  | "form"
  | "legendary"
  | "page"
  | "section";

export type HeroColor = "primary" | "secondary";

export interface HeroProps extends Omit<SectionProps, "color" | "is"> {
  actions?: HeroActionsProps;
  caption?: CaptionProps;
  color?: HeroColor;
  is?: HeroPattern;
}

export const Hero: FC<HeroProps> = ({
  actions,
  as = "header",
  caption,
  children,
  color,
  className,
  container,
  is = "page",
  vh = "1/4",
  ...rest
}) => (
  <Section
    as={as}
    is="hero"
    vh={vh}
    {...(rest as SectionProps)}
    container={{
      ...(container as BoxProps),
      className: clsx(styles.heroContainer, container?.className),
    }}
    className={clsx(
      styles.hero,
      is && styles[is],
      color && styles[color],
      className
    )}
  >
    {caption && (
      <Caption
        {...caption}
        headingProps={{ as: "h1", is: "hero", ...caption?.headingProps }}
        subheadingProps={{ as: "h2", ...caption?.subheadingProps }}
      />
    )}
    {children}
    {actions && <HeroActions {...actions} />}
  </Section>
);
