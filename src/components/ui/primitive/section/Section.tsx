import React, { FC } from "react";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

export type SectionPattern =
  | "bar"
  | "content"
  | "cta"
  | "default"
  | "error"
  | "feature"
  | "form"
  | "grid"
  | "heel"
  | "hero"
  | "media"
  | string;

export type SectionUtils =
  | "compact"
  | "contained"
  | "fluid"
  | "full"
  | "spaced"
  | "spaced-bottom"
  | "spaced-top"
  | string;

export type SectionParent =
  | "layout-default"
  | "page-blog"
  | "page-default"
  | "page-home"
  | "template-default"
  | "template-post"
  | string;

export interface SectionProps extends PatternProps {
  container?: PatternProps;
  is?: SectionPattern;
  of?: SectionUtils;
  on?: SectionParent;
}

export const Section: FC<SectionProps> = ({
  as = "section",
  children,
  className,
  container,
  is = "default",
  of,
  on,
  ...rest
}) => (
  <Pattern
    as={as}
    {...rest}
    className={classNames(`section-${is}`, of, on, className)}
  >
    <Pattern as="figure" is="container" {...container}>
      {children}
    </Pattern>
  </Pattern>
);
