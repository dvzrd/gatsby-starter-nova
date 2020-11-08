import React, { FC } from "react";
import classNames from "classnames";

import {
  Text,
  TextProps,
  TextPattern,
  TextSize,
  getTextSize,
} from "components";

import styles from "./Button.module.css";

export type ButtonColor = "inherit" | "primary" | "secondary";

export type ButtonPattern = "default" | "outline" | "text";

export type ButtonType = "button" | "reset" | "submit";

export interface ButtonProps<Button extends HTMLElement = HTMLButtonElement>
  extends Omit<TextProps<Button>, "color" | "pattern"> {
  color?: ButtonColor;
  pattern?: ButtonPattern;
  size?: TextSize;
  text?: TextPattern;
  type?: ButtonType;
}

export const Button: FC<ButtonProps> = ({
  as = "button",
  children,
  className,
  color,
  is = "button",
  pattern = "default",
  size = "md",
  text,
  type,
  ...rest
}) => {
  const textSize: TextPattern = getTextSize(size);

  return (
    <Text
      as={as}
      is={is}
      pattern={textSize}
      {...(rest as TextProps)}
      className={classNames(
        "transition-colors duration-250 ease-in-out focus:outline-none",
        styles.default,
        styles[color],
        styles[pattern],
        {
          "border-2 border-hover border-solid bg-background-paper text-color-paper  hover:text-color-primary hover:bg-background-primary hover:border-primary":
            pattern === "default",
        },
        styles[size],
        {
          "py-1 px-2 lg:px-3": size === "xs",
          "py-1 px-3 md:py-2 lg:px-4": size === "sm",
          "py-2 px-4 md:px-5 xl:py-3 xl:px-6": size === "md",
          "py-3 px-5 md:px-6 xl:py-4 xl:px-7": size === "lg",
          "py-4 px-6 md:px-7 xl:py-5 xl:px-8": size === "xl",
          "py-5 px-7 md:px-8 xl:py-6 xl:px-9": size === "2xl",
          "py-6 px-8 md:px-8 xl:py-7 xl:px-12": size === "3xl",
          "py-7 px-9 md:px-8 xl:py-8 xl:px-14": size === "4xl",
          "py-8 px-10 md:px-8 xl:py-9 xl:px-16": size === "5xl",
        },
        className
      )}
    >
      {children}
    </Text>
  );
};
