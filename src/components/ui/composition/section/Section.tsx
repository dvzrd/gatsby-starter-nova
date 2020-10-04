import React, { FC } from "react";
import classNames from "classnames";

import { BaseElement as Element, ElementProps } from "components";

export type SectionPattern = "contained" | "content" | "feature" | "hero";

export interface SectionProps extends ElementProps {
  container?: ElementProps;
  patterns?: SectionPattern[];
}

export const Section: FC<SectionProps> = ({
  as = "section",
  children,
  className = "text-copy",
  container,
  patterns,
  ...rest
}) => (
  <Element
    as={as}
    {...rest}
    className={classNames("section", [patterns], className)}
  >
    <Element
      as="figure"
      {...container}
      className={classNames("container", container?.className)}
    >
      {children}
    </Element>
  </Element>
);
