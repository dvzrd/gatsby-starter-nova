import React, { ElementType, FC } from "react";
import classNames from "classnames";

import { Box, BoxProps, Text, TextProps } from "components";

import styles from "./HeroCaption.module.css";

export interface HeroCaptionProps extends BoxProps {
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
  <Box
    as={as}
    {...(rest as BoxProps)}
    className={classNames(styles.caption, className)}
  >
    {meta && (
      <Text as="small" is="meta" {...(metaProps as TextProps)}>
        {meta}
      </Text>
    )}
    {heading && (
      <Text as="h1" is="hero" {...(headingProps as TextProps)}>
        {heading}
      </Text>
    )}
    {subheading && (
      <Text
        as="h2"
        is="subheading"
        {...(subheadingProps as TextProps)}
        className={classNames(styles.subheading, subheadingProps?.className)}
      >
        {subheading}
      </Text>
    )}
    {context}
  </Box>
);
