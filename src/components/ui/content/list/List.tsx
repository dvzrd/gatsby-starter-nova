import React, { FC } from "react";
import { random } from "lodash";
import classNames from "classnames";

import { Text, TextProps, TextPattern } from "components";

import styles from "./List.module.css";
import { ListItem, ListItemProps } from "./item";

export type ListPattern = "default" | "inline" | "table";

export interface ListProps<List extends HTMLElement = HTMLUListElement>
  extends Omit<TextProps<List>, "pattern"> {
  items?: ListItemProps[];
  pattern?: ListPattern;
  text?: TextPattern;
}

export const List: FC<ListProps> = ({
  as = "ul",
  children,
  className,
  is = "list",
  items = undefined,
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
    {items?.length &&
      items.map(({ children, ...rest }) => (
        <ListItem key={random(16)} {...(rest as ListItemProps)}>
          {children}
        </ListItem>
      ))}
    {children}
  </Text>
);
