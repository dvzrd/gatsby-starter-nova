import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import { Section, SectionProps } from "components";

export interface TopbarProps extends SectionProps {
  isHidden?: boolean;
  navLeft?: ReactNode;
  navLeftClassName?: string;
  navRight?: ReactNode;
  navRightClassName?: string;
}

export const Topbar: FC<TopbarProps> = ({
  as = "header",
  children,
  className = "z-20",
  container = { className: "flex justify-between" },
  isHidden = false,
  navLeft,
  navLeftClassName,
  navRight,
  navRightClassName,
}) => {
  if (isHidden) return null;

  return (
    <Section as={as} className={className} container={container}>
      {navLeft && (
        <nav
          className={classNames(
            "content-center flex flex-1 items-center",
            navLeftClassName
          )}
        >
          {navLeft}
        </nav>
      )}
      {children}
      {navRight && (
        <nav
          className={classNames(
            "content-center flex flex-1 items-center justify-end",
            navRightClassName
          )}
        >
          {navRight}
        </nav>
      )}
    </Section>
  );
};
