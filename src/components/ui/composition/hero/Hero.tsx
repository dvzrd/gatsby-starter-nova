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

export type HeroVariant =
  | "card"
  | "cta"
  | "footer"
  | "form"
  | "legendary"
  | "page";

export interface HeroProps extends SectionProps {
  actions?: HeroActionsProps;
  caption?: HeroCaptionProps;
  variant?: HeroVariant;
}

export const Hero: FC<HeroProps> = ({
  actions,
  as = "header",
  caption,
  children,
  className,
  is = "section",
  on = "page-default",
  pattern = "hero",
  variant = "page",
  ...rest
}) => (
  <Section
    as={as}
    is={is}
    on={on}
    {...rest}
    className={classNames(styles.hero, styles[variant], className)}
  >
    {caption && <HeroCaption {...caption} />}
    {children}
    {actions && <HeroActions {...actions} />}
  </Section>
);
