import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import { Pattern, PatternProps, Section, SectionProps } from "components";

export type LayoutHeaderPattern = "default" | "fixed" | "sticky";

export interface LayoutHeaderProps extends SectionProps {
  isHidden?: boolean;
  navLeft?: ReactNode;
  navLeftProps?: PatternProps;
  navRight?: ReactNode;
  navRightProps?: PatternProps;
  pattern?: LayoutHeaderPattern;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({
  as = "header",
  children,
  className,
  is = "navbar",
  isHidden = false,
  navLeft,
  navLeftProps,
  navRight,
  navRightProps,
  pattern = "default",
  ...rest
}) => {
  if (isHidden) return null;

  return (
    <Section
      as={as}
      is={is}
      {...rest}
      className={classNames(`topbar-${pattern}`, className)}
    >
      {navLeft && (
        <Pattern as="nav" is="navbar" {...navLeftProps}>
          {navLeft}
        </Pattern>
      )}
      {children}
      {navRight && (
        <Pattern
          as="nav"
          is="navbar"
          {...navRightProps}
          className={classNames("justify-end", navRightProps?.className)}
        >
          {navRight}
        </Pattern>
      )}
    </Section>
  );
};
