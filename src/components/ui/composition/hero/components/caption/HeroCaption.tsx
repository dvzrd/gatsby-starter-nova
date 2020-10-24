import React, { ElementType, FC } from "react";
import classNames from "classnames";

import { Pattern, PatternProps, Text, TextProps } from "components";

export interface HeroCaptionProps extends PatternProps {
  context?: ElementType;
  heading?: string;
  headingProps?: TextProps;
  meta?: string;
  metaProps?: TextProps;
  subheading?: string;
  subheadingProps?: TextProps;
}

export const HeroCaption: FC<HeroCaptionProps> = ({
  as = "figcaption",
  className,
  context,
  heading,
  headingProps,
  meta,
  metaProps,
  subheading,
  subheadingProps,
  ...rest
}) => (
  <Pattern as={as} {...rest} className={classNames("hero-caption", className)}>
    {meta && (
      <Text as="h2" pattern="meta" {...metaProps}>
        {meta}
      </Text>
    )}
    {heading && (
      <Text as="h1" pattern="hero" {...headingProps}>
        {heading}
      </Text>
    )}
    {subheading && (
      <Text
        as="h2"
        pattern="subheading"
        mod="font-thin leading-snug mt-4"
        {...subheadingProps}
      >
        {subheading}
      </Text>
    )}
    {context}
  </Pattern>
);
