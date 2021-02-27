import React, { FC } from "react";
import { random } from "lodash";
import clsx from "clsx";

import { Text, TextProps, TextPattern } from "components";

import styles from "./List.module.css";
import { ListItem, ListItemProps } from "./item";

export type ListPattern = "default" | "inline" | "menu";

export interface ListProps<List extends HTMLElement = HTMLUListElement>
  extends Omit<TextProps<List>, "is"> {
  items?: ListItemProps[];
  is?: ListPattern;
  text?: TextPattern;
}

export const List: FC<ListProps> = ({
  as = "ul",
  children,
  className,
  is,
  items = undefined,
  text,
  ...rest
}) => (
  <Text
    as={as}
    is={text}
    {...(rest as TextProps)}
    className={clsx(styles.default, is && styles[is], className)}
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
