import React, { FC } from "react";
import classNames from "classnames";

import { Section, SectionProps } from "components";

import {
  HeroActions,
  HeroActionsProps,
  HeroCaption,
  HeroCaptionProps,
} from "./components";

export interface HeroProps extends SectionProps {
  actions?: HeroActionsProps;
  caption?: HeroCaptionProps;
}

export const Hero: FC<HeroProps> = ({
  actions,
  as = "header",
  caption,
  children,
  className = "text-copy",
  is = "hero",
  of,
  on = "page",
  ...rest
}) => (
  <Section
    as={as}
    is={is}
    of={of}
    on={on}
    {...rest}
    className={classNames("hero", className)}
  >
    {caption && <HeroCaption {...caption} />}
    {children}
    {actions && <HeroActions {...actions} />}
  </Section>
);
