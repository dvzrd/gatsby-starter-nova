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
      <Text as="h2" is="meta" {...metaProps}>
        {meta}
      </Text>
    )}
    {heading && (
      <Text as="h1" is="hero" {...headingProps}>
        {heading}
      </Text>
    )}
    {subheading && (
      <Text as="h2" is="subheading" {...subheadingProps}>
        {subheading}
      </Text>
    )}
    {context}
  </Pattern>
);