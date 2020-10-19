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
  | "legendary";

export interface HeroProps extends SectionProps {
  actions?: HeroActionsProps;
  caption?: HeroCaptionProps;
  variant?: HeroPattern;
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
  variant = "default",
  ...rest
}) => {
  const getPattern = () => {
    switch (variant) {
      case "card":
      case "cta":
      case "footer":
      case "form":
      case "legendary":
      case "default":
      default:
        return "content-center flex items-center justify-center py-20 text-color";
    }
  };

  return (
    <Section
      as={as}
      is={is}
      on={on}
      {...rest}
      className={classNames(getPattern(), className)}
    >
      {caption && <HeroCaption {...caption} />}
      {children}
      {actions && <HeroActions {...actions} />}
    </Section>
  );
};
