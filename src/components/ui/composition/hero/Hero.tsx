import React, { FC } from "react";
import classNames from "classnames";

import { Section, SectionProps } from "components";

import {
  HeroActions,
  HeroActionsProps,
  HeroCaption,
  HeroCaptionProps,
} from "./components";
import styles from "./Hero.module.css";

export type HeroPattern =
  | "card"
  | "cta"
  | "footer"
  | "form"
  | "legendary"
  | "page"
  | "section";

export interface HeroProps extends Omit<SectionProps, "is"> {
  actions?: HeroActionsProps;
  caption?: HeroCaptionProps;
  is?: HeroPattern;
}

export const Hero: FC<HeroProps> = ({
  actions,
  as = "header",
  caption,
  children,
  className,
  is = "page",
  ...rest
}) => (
  <Section
    as={as}
    is="hero"
    {...(rest as SectionProps)}
    className={classNames(styles[is], className)}
  >
    {caption && <HeroCaption {...caption} />}
    {children}
    {actions && <HeroActions {...actions} />}
  </Section>
);
