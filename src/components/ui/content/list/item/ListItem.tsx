import React, { FC } from "react";
import classNames from "classnames";

import { Text, TextProps, TextPattern } from "components";

import styles from "./ListItem.module.css";

export type ListItemPattern = "cell" | "default" | "wrapper";

export interface ListItemProps<ListItem extends HTMLElement = HTMLLIElement>
  extends Omit<TextProps<ListItem>, "is"> {
  is?: ListItemPattern;
  text?: TextPattern;
}

export const ListItem: FC<ListItemProps> = ({
  as = "li",
  children,
  className,
  is,
  text,
  ...rest
}) => (
  <Text
    as={as}
    is={text}
    {...(rest as TextProps)}
    className={classNames(styles.default, is && styles[is])}
  >
    {children}
  </Text>
);
