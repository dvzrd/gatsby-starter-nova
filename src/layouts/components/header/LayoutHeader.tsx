import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import { Box, BoxProps, Section, SectionProps } from "components";

export interface LayoutHeaderProps extends SectionProps {
  isFixed?: boolean;
  isHidden?: boolean;
  isMenuOpened?: boolean;
  nav?: BoxProps;
  navLeft?: ReactNode;
  navLeftProps?: BoxProps;
  navRight?: ReactNode;
  navRightProps?: BoxProps;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({
  as = "header",
  children,
  container,
  is = "navbar",
  isFixed = false,
  isHidden = false,
  isMenuOpened = false,
  nav,
  navLeft,
  navLeftProps,
  navRight,
  navRightProps,
  position = "relative",
  ...rest
}) => {
  if (isHidden) return null;

  const containerProps = {
    className:
      "flex flex-row flex-wrap content-between items-center justify-between h-full",
    ...container,
  };

  const navProps = {
    order: 0,
    ...nav,
  };

  return (
    <Section
      as={as}
      className={classNames(
        isMenuOpened
          ? `fixed top-0 left-0 w-full h-screen lg:${position} lg:top-auto lg:left-auto lg:w-auto lg:h-auto z-10`
          : isFixed
          ? "fixed top-0 left-0 w-full"
          : position
      )}
      container={containerProps}
      is={is}
      {...(rest as SectionProps)}
    >
      {navLeft && (
        <Box
          as="nav"
          {...(navProps as BoxProps)}
          {...(navLeftProps as BoxProps)}
          className={classNames(
            "content-center flex flex-1 items-center",
            navLeftProps?.className
          )}
        >
          {navLeft}
        </Box>
      )}
      {children}
      {navRight && (
        <Box
          as="nav"
          {...(navProps as BoxProps)}
          {...(navRightProps as BoxProps)}
          className={classNames(
            "content-center flex flex-1 items-center justify-end",
            navRightProps?.className
          )}
        >
          {navRight}
        </Box>
      )}
    </Section>
  );
};
