import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import { Pattern, PatternProps, Section, SectionProps } from "components";

export type LayoutHeaderPattern = "topbar" | string;

export interface LayoutHeaderProps extends SectionProps {
  isHidden?: boolean;
  navLeft?: ReactNode;
  navLeftProps?: PatternProps;
  navProps?: PatternProps;
  navRight?: ReactNode;
  navRightProps?: PatternProps;
  variant?: LayoutHeaderPattern;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({
  as = "header",
  children,
  className,
  is = "section",
  isHidden = false,
  navLeft,
  navLeftProps,
  navProps,
  navRight,
  navRightProps,
  pattern = "navbar",
  variant = "topbar",
  ...rest
}) => {
  if (isHidden) return null;

  return (
    <Section
      as={as}
      is={is}
      pattern={pattern}
      {...rest}
      className={classNames(variant, className)}
    >
      {navLeft && (
        <Pattern as="nav" is="nav" {...navProps} {...navLeftProps}>
          {navLeft}
        </Pattern>
      )}
      {children}
      {navRight && (
        <Pattern
          as="nav"
          is="nav"
          {...navProps}
          {...navRightProps}
          className={classNames("justify-end", navRightProps?.className)}
        >
          {navRight}
        </Pattern>
      )}
    </Section>
  );
};
