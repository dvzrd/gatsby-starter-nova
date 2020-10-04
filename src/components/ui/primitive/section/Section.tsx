import React, { FC } from "react";
import classNames from "classnames";

import {
  BaseElement as Element,
  ElementProps,
  Pattern,
  PatternProps,
} from "components";

export type Section = "content" | "feature" | "form" | "heel" | "hero";

export type SectionUtils = "compact" | "contained" | "fluid" | "full";

export type SectionParent = "composition" | "layout" | "page" | "template";

export interface SectionProps extends PatternProps {
  container?: ElementProps;
  is?: Section;
  of?: SectionUtils;
  on?: SectionParent;
}

export const Section: FC<SectionProps> = ({
  as = "section",
  children,
  className = "text-copy",
  container,
  is,
  of,
  on,
  ...rest
}) => (
  <Pattern
    as={as}
    {...rest}
    className={classNames("section", is, of, on, className)}
  >
    <Element
      as="figure"
      {...container}
      className={classNames("container", container?.className)}
    >
      {children}
    </Element>
  </Pattern>
);
