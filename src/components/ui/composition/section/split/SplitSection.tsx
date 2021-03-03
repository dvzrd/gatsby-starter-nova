import React, { FC, ReactNode } from "react";
import clsx from "clsx";

import { Box, BoxProps, Section, SectionProps } from "components";

import styles from "./SplitSection.module.css";

export interface SplitSectionProps extends SectionProps {
  isReversed?: boolean;
  left?: ReactNode;
  leftProps?: BoxProps;
  right?: ReactNode;
  rightProps?: BoxProps;
  split?: BoxProps;
}

export const SplitSection: FC<SplitSectionProps> = ({
  children,
  className,
  container,
  isReversed,
  left,
  leftProps,
  right,
  rightProps,
  split,
  ...rest
}) => {
  const containerProps: BoxProps = {
    ...container,
    className: clsx(styles.wrapper, container?.className),
  };

  const renderSplit = (node: ReactNode, props?: BoxProps) => {
    if (!node) return false;

    const splitProps: BoxProps = {
      ...split,
      ...props,
    };

    return (
      <Box
        {...(splitProps as BoxProps)}
        className={clsx(styles.split, splitProps.className)}
      >
        {node}
      </Box>
    );
  };

  return (
    <Section
      className={className}
      container={containerProps}
      {...(rest as SectionProps)}
    >
      {isReversed
        ? renderSplit(right, rightProps)
        : renderSplit(left, leftProps)}
      {children}
      {isReversed
        ? renderSplit(left, leftProps)
        : renderSplit(right, rightProps)}
    </Section>
  );
};
