import React, { FC } from "react";
import classNames from "classnames";

import {
  BaseElement as Element,
  ElementProps,
  Pattern,
  PatternProps,
} from "components";

export type Section = "content" | "feature" | "form" | "hero";

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
  of,
  ...rest
}) => (
  <Pattern as={as} {...rest} className={classNames("section", of, className)}>
    <Element
      as="figure"
      {...container}
      className={classNames("container", container?.className)}
    >
      {children}
    </Element>
  </Pattern>
);
