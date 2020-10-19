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

export interface SectionProps extends PatternProps {
  container?: PatternProps;
  is?: SectionPattern;
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
    is={is}
    of={of}
    on={on}
    {...rest}
    className={classNames(`section-${is}`, of, on, className)}
  >
    <Pattern as="figure" is="container" {...container}>
      {children}
    </Pattern>
  </Pattern>
);
