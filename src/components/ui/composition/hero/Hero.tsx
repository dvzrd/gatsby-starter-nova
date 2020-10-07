import React, { FC } from "react";
import classNames from "classnames";

import { Section, SectionProps } from "components";

import {
  HeroActions,
  HeroActionsProps,
  HeroCaption,
  HeroCaptionProps,
} from "./components";

export type HeroPattern =
  | "card"
  | "cta"
  | "default"
  | "footer"
  | "form"
  | "legendary"
  | "page"
  | "section";

export interface HeroProps extends SectionProps {
  actions?: HeroActionsProps;
  caption?: HeroCaptionProps;
  pattern?: HeroPattern;
}

export const Hero: FC<HeroProps> = ({
  actions,
  as = "header",
  caption,
  children,
  className,
  is = "hero",
  of,
  on = "page-default",
  pattern = "default",
  ...rest
}) => (
  <Section
    as={as}
    is={is}
    on={on}
    {...rest}
    className={classNames(`hero-${pattern}`, className)}
  >
    {caption && <HeroCaption {...caption} />}
    {children}
    {actions && <HeroActions {...actions} />}
  </Section>
);
