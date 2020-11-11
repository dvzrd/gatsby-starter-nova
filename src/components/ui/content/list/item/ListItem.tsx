import React, { FC } from "react";
import classNames from "classnames";

import { Text, TextProps, TextPattern } from "components";

import styles from "./ListItem.module.css";

export type ListItemPattern = "cell" | "default" | "wrapper";

export interface ListItemProps<ListItem extends HTMLElement = HTMLLIElement>
  extends Omit<TextProps<ListItem>, "pattern"> {
  pattern?: ListItemPattern;
  text?: TextPattern;
}

export const ListItem: FC<ListItemProps> = ({
  as = "li",
  children,
  className,
  is = "item",
  pattern = "default",
  text,
  ...rest
}) => (
  <Text
    as={as}
    is={is}
    pattern={text}
    {...(rest as TextProps)}
    className={classNames(styles.default, styles[pattern])}
  >
    {children}
  </Text>
);
