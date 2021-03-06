import React, { FC } from "react";
import classNames from "classnames";

import { Text, TextProps } from "components";

import styles from "./Tag.module.css";

export type TagPattern = "default" | "primary" | "secondary" | string;

export interface TagProps extends Omit<TextProps, "is"> {
  is?: TagPattern;
  text?: string;
}

export const Tag: FC<TagProps> = ({
  children,
  className,
  is = "default",
  text = "caption",
  ...rest
}) => (
  <Text
    is={text}
    {...(rest as TextProps)}
    className={classNames(styles.tag, is && styles[is], className)}
  >
    {children}
  </Text>
);
