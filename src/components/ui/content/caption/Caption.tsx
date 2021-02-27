import React, { FC } from "react";
import clsx from "clsx";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

import { Box, BoxProps, Link, LinkProps, Text, TextProps } from "components";
import { Observer, Spring } from "types";

import styles from "./Caption.module.css";

export interface CaptionLinkProps extends Omit<TextProps, "to"> {
  to?: string;
}

export interface CaptionProps extends BoxProps {
  heading?: string;
  headingProps?: CaptionLinkProps;
  meta?: string;
  metaProps?: CaptionLinkProps;
  observer?: Observer;
  spring?: Spring;
  subheading?: string;
  subheadingProps?: TextProps;
}

export const Caption: FC<CaptionProps> = ({
  children,
  className,
  heading,
  headingProps,
  meta,
  metaProps,
  observer,
  spring,
  subheading,
  subheadingProps,
  ...rest
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    ...observer,
  });

  const springProps: Spring = {
    from: { opacity: 0 },
    opacity: inView ? 1 : 0,
    transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50%, 0)",
    ...spring,
  };

  const captionProps: BoxProps = {
    as: animated.figcaption,
    innerRef: ref,
    style: useSpring(springProps),
    ...rest,
  };

  return (
    <Box {...captionProps} className={clsx(styles.caption, className)}>
      {meta &&
        (metaProps?.to ? (
          <Link
            text="subheading"
            {...(metaProps as LinkProps)}
            to={metaProps.to}
            className={clsx(styles.meta, metaProps?.className)}
          >
            {meta}
          </Link>
        ) : (
          <Text
            as="small"
            is="subheading"
            {...(metaProps as TextProps)}
            className={clsx(styles.meta, metaProps?.className)}
          >
            {meta}
          </Text>
        ))}
      {heading &&
        (headingProps?.to ? (
          <Link to={headingProps.to}>
            <Text
              as="h3"
              is="heading"
              {...(headingProps as TextProps)}
              className={clsx(styles.heading, headingProps?.className)}
            >
              {heading}
            </Text>
          </Link>
        ) : (
          <Text
            as="h3"
            is="heading"
            {...(headingProps as TextProps)}
            className={clsx(styles.heading, headingProps?.className)}
          >
            {heading}
          </Text>
        ))}
      {subheading && (
        <Text
          as="h4"
          is="subheading"
          {...(subheadingProps as TextProps)}
          className={clsx(styles.subheading, subheadingProps?.className)}
        >
          {subheading}
        </Text>
      )}
      {children}
    </Box>
  );
};
