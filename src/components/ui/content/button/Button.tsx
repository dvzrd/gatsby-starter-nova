import React, { FC } from "react";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

import styles from "./Button.module.css";

export type ButtonColor =
  | "inherit"
  | "primary"
  | "primary-contrast"
  | "secondary"
  | "secondary-contrast"
  | "transparent";

export type ButtonPattern = "default" | "icon" | "outline" | "text";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export type ButtonType = "button" | "reset" | "submit";

export interface ButtonProps<Button extends HTMLElement = HTMLButtonElement>
  extends Omit<PatternProps<Button>, "color"> {
  color?: ButtonColor;
  pattern?: ButtonPattern;
  size?: ButtonSize;
  type?: ButtonType;
}

export const Button: FC<ButtonProps> = ({
  as = "button",
  children,
  className,
  color = "inherit",
  is = "button",
  pattern = "default",
  size = "md",
  type = "button",
  ...rest
}) => (
  <Pattern
    as={as}
    is={is}
    {...(rest as PatternProps)}
    className={classNames(
      styles.default,
      styles[color],
      styles[pattern],
      {
        "py-2 px-4 md:py-3 md:px-5 xl:py-4 xl:px-6": size === "md",
      },
      className
    )}
  >
    {children}
  </Pattern>
);
