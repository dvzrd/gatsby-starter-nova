import React, { FC } from "react";
import classNames from "classnames";

import { List, ListProps } from "components";

import styles from "./Menu.module.css";

export interface MenuProps extends ListProps {
  isOpened?: boolean;
}

export const Menu: FC<MenuProps> = ({
  as = "aside",
  children,
  className,
  isOpened = false,
  is = "menu",
  text = "title",
  ...rest
}) => (
  <List
    as={as}
    is={is}
    text={text}
    {...(rest as ListProps)}
    className={classNames(isOpened ? styles.opened : styles.closed, className)}
  >
    {children}
  </List>
);
