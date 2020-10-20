import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import { Pattern, PatternProps, Section, SectionProps } from "components";

export interface LayoutHeaderProps extends SectionProps {
  isHidden?: boolean;
  navLeft?: ReactNode;
  navLeftProps?: PatternProps;
  navProps?: PatternProps;
  navRight?: ReactNode;
  navRightProps?: PatternProps;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({
  as = "header",
  children,
  container,
  is = "header",
  isHidden = false,
  navLeft,
  navLeftProps,
  navProps,
  navRight,
  navRightProps,
  pattern = "navbar",
  ...rest
}) => {
  if (isHidden) return null;

  const containerProps = {
    utils: "flex justify-between",
    ...container,
  };

  return (
    <Section
      as={as}
      container={containerProps}
      is={is}
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
