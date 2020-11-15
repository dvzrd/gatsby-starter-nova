import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import { Pattern, PatternProps, Section, SectionProps } from "components";

export interface LayoutHeaderProps extends SectionProps {
  isFixed?: boolean;
  isHidden?: boolean;
  isMenuOpened?: boolean;
  nav?: PatternProps;
  navLeft?: ReactNode;
  navLeftProps?: PatternProps;
  navRight?: ReactNode;
  navRightProps?: PatternProps;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({
  as = "header",
  children,
  container,
  is = "header",
  isFixed = false,
  isHidden = false,
  isMenuOpened = false,
  nav,
  navLeft,
  navLeftProps,
  navRight,
  navRightProps,
  pattern = "navbar",
  position = "relative",
  ...rest
}) => {
  if (isHidden) return null;

  const containerProps = {
    mod: "flex flex-row flex-wrap content-between justify-between h-full",
    ...container,
  };

  const navProps = {
    order: 0,
    ...nav,
  };

  return (
    <Section
      as={as}
      container={containerProps}
      is={is}
      mod={classNames(
        isMenuOpened
          ? `fixed top-0 left-0 w-full h-screen lg:${position} lg:top-auto lg:left-auto lg:w-auto lg:h-auto`
          : isFixed
          ? "fixed top-0 left-0 w-full"
          : position
      )}
      pattern={pattern}
      {...rest}
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
