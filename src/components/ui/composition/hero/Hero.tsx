import React, { FC } from "react";
import classNames from "classnames";

import { Section, SectionPattern, SectionProps } from "components";

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

export interface HeroProps extends Omit<SectionProps, "pattern"> {
  actions?: HeroActionsProps;
  caption?: HeroCaptionProps;
  pattern?: HeroPattern;
  section?: SectionPattern;
}

export const Hero: FC<HeroProps> = ({
  actions,
  as = "header",
  caption,
  children,
  className,
  is = "hero",
  pattern = "section",
  section = "hero",
  ...rest
}) => (
  <Section
    as={as}
    is={is}
    pattern={section}
    {...(rest as SectionProps)}
    className={classNames(styles[pattern], className)}
  >
    {caption && <HeroCaption {...caption} />}
    {children}
    {actions && <HeroActions {...actions} />}
  </Section>
);
