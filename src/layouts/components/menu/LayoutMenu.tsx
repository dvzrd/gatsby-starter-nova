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
  pattern = "menu",
  text = "title",
  ...rest
}) => (
  <List
    as={as}
    pattern={pattern}
    text={text}
    {...(rest as ListProps)}
    className={classNames(
      "mt-4 xs:mt-6 xs:mb-8 sm:mt-8 sm:mb-10 md:mt-10 md:mb-12",
      styles.menu,
      isOpened ? styles.opened : styles.closed,
      className
    )}
  >
    {children}
  </List>
);
