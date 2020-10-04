import React, { ElementType, FC } from "react";
import { Link, GatsbyLinkProps } from "gatsby";
import classNames from "classnames";

import {
  ElementProps,
  Pattern,
  PatternProps,
  Section,
  SectionProps,
  Text,
} from "components";

export interface HeroCaption extends PatternProps {
  context?: ElementType;
  heading?: string;
  meta?: string;
  subheading?: string;
}

export interface HeroButton extends GatsbyLinkProps<ElementProps> {
  label?: string;
}

export interface HeroActions extends PatternProps {
  buttons?: HeroButton[];
  footer?: ElementType;
}

export interface HeroProps extends SectionProps {
  actions?: HeroActions;
  caption?: HeroCaption;
}

export const Hero: FC<HeroProps> = ({
  actions,
  as = "header",
  is = "hero",
  of,
  on = "page",
  caption,
  children,
  className,
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
    {caption && (
      <Pattern
        {...caption}
        className={classNames("hero-caption", caption.className)}
      >
        {caption.meta && (
          <Text as="h2" pattern="meta">
            {caption.meta}
          </Text>
        )}
        {caption.heading && (
          <Text as="h1" pattern="heading">
            {caption.heading}
          </Text>
        )}
        {caption.subheading && (
          <Text as="h2" pattern="subheading">
            {caption.subheading}
          </Text>
        )}
        {caption.context}
      </Pattern>
    )}
    {children}
    {actions && (
      <Pattern className={classNames("hero-actions", actions.className)}>
        {actions.buttons &&
          actions.buttons.map((action) => (
            <Link
              className={classNames("hero-button", action.className)}
              to={action.to}
            >
              {action.label}
            </Link>
          ))}
        {actions.footer}
      </Pattern>
    )}
  </Section>
);
