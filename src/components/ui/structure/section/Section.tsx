import React, { FC } from "react";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

export type SectionPattern =
  | "content"
  | "cta"
  | "default"
  | "error"
  | "feature"
  | "form"
  | "heel"
  | "hero"
  | "navbar"
  | string;

export interface SectionProps extends PatternProps {
  container?: PatternProps;
  pattern?: SectionPattern;
}

export const Section: FC<SectionProps> = ({
  as = "section",
  children,
  className,
  container,
  is = "section",
  of,
  on,
  pattern = "default",
  ...rest
}) => {
  const getPattern = () => {
    switch (pattern) {
      case "content":
        return "py-8 text-color";
      case "feature":
        return "content-center flex items-center justify-center min-h-screen-1/4 py-16";
      case "navbar":
        return "content-center flex flex-none items-center py-4 relative text-color z-20";
      case "heel":
        return "content-end flex items-end py-8 text-color";
      case "hero":
        return "content-center flex items-center justify-center py-20 text-color";
      case "default":
      default:
        return "";
    }
  };

  return (
    <Pattern
      as={as}
      is={is}
      of={of}
      on={on}
      {...rest}
      className={classNames(getPattern(), className)}
    >
      <Pattern as="figure" is="container" {...container}>
        {children}
      </Pattern>
    </Pattern>
  );
};
