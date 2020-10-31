import React, { FC } from "react";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

export type ButtonPattern = "default" | "link" | "text";

// TODO:
// - extend as html button
// - omit color prop from box (primary, secondary)
// - add size prop (xs, sm, md, lg, xl)
// - add more style patterns and modifiers

export interface ButtonProps extends PatternProps {
  pattern?: ButtonPattern;
  type?: string;
}

export const Button: FC<ButtonProps> = ({
  as = "button",
  children,
  className,
  is = "button",
  ...rest
}) => (
  <Pattern as={as} is={is} {...rest} className={classNames(className)}>
    {children}
  </Pattern>
);
