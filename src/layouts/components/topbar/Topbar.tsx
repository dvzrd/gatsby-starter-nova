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

export const topbarDefaultProps: TopbarProps = {
  as: "header",
  className: "z-20",
  container: {
    className: "flex justify-between",
  },
  navLeftClassName: "content-center flex flex-1 items-center",
  navRightClassName: "content-center flex flex-1 items-center justify-end",
};

export const Topbar: FC<TopbarProps> = ({
  as,
  children,
  className,
  container,
  isHidden = false,
  navLeft,
  navLeftClassName,
  navRight,
  navRightClassName,
}) => {
  if (isHidden) return null;

  return (
    <Section
      as={as}
      className={classNames(topbarDefaultProps.className, className)}
      container={container || topbarDefaultProps.container}
    >
      {navLeft && (
        <nav
          className={classNames(
            topbarDefaultProps.navLeftClassName,
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
            topbarDefaultProps.navRightClassName,
            navRightClassName
          )}
        >
          {navRight}
        </nav>
      )}
    </Section>
  );
};
