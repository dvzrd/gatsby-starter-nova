import React, { FC } from "react";
import classNames from "classnames";

import { List, ListProps } from "components";

import styles from "./LayoutMenu.module.css";

export interface LayoutMenuProps extends ListProps {
  isOpened?: boolean;
}

export const LayoutMenu: FC<LayoutMenuProps> = ({
  as = "aside",
  children,
  className,
  isOpened,
  is = "menu",
  text = "title",
  ...rest
}) => (
  <List
    as={as}
    is={is}
    text={text}
    {...(rest as ListProps)}
    className={classNames(
      styles.menu,
      isOpened ? styles.opened : styles.closed,
      className
    )}
  >
    {children}
  </List>
);
