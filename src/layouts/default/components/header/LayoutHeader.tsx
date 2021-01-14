import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";

import {
  BoxProps,
  Button,
  ButtonProps,
  Icon,
  Link,
  Menu,
  MenuProps,
  SplitSection,
  SplitSectionProps,
} from "components";
import { Brand } from "containers";
import { ThemeSwitch } from "contexts";
import { LayoutLogoProps } from "layouts";
import { GatsbyLocation } from "types/gatsby";

import styles from "./LayoutHeader.module.css";

export interface LayoutHeaderProps extends SplitSectionProps {
  isFixed?: boolean;
  isHidden?: boolean;
  location?: GatsbyLocation;
  logo?: LayoutLogoProps;
  menu?: MenuProps;
  themeSwitch?: ButtonProps;
  toggleMenu?: () => void;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({
  as = "header",
  container,
  is = "navbar",
  isFixed = false,
  isHidden = false,
  left,
  leftProps,
  location,
  logo,
  menu,
  position = "absolute",
  right,
  rightProps,
  split,
  themeSwitch,
  ...rest
}) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  if (isHidden) return null;

  const containerProps: BoxProps = {
    className: "h-full",
    ...container,
  };

  const menuProps: MenuProps = {
    order: 1,
    ...menu,
    className: classNames(
      "lg:hidden",
      menuOpened && "mt-4 xs:mt-6 xs:mb-8 sm:mt-8 sm:mb-10 md:mt-10 md:mb-12",
      menu?.className
    ),
  };

  const splitProps: BoxProps = {
    order: 0,
    ...split,
    className: classNames(styles.nav, split?.className),
  };

  const themeSwitchProps: ButtonProps = {
    className: styles.switch,
    ...themeSwitch,
  };

  useEffect(() => {
    const onScroll = () => {
      let currentPosition = window.pageYOffset;
      // scrolling down
      if (currentPosition > scrollTop) {
        // scrolled to bottom
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          setHeaderFixed(true);
        } else {
          setHeaderFixed(false);
        }
      } else {
        // scrolled to top
        if (window.scrollY === 0) {
          setHeaderFixed(false);
        } else {
          setHeaderFixed(true);
        }
      }

      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <SplitSection
      as={as}
      is={is}
      {...(rest as SplitSectionProps)}
      className={classNames(
        styles.header,
        menuOpened
          ? styles.opened
          : isFixed || headerFixed
          ? styles.affixed
          : styles.transparent
      )}
      container={containerProps}
      left={
        <>
          <Brand {...logo} />
          <Link
            activeClassName={styles.active}
            className={classNames(styles.link, "hidden lg:inline-flex")}
            text="caption"
            to="/about"
          >
            About
          </Link>
        </>
      }
      leftProps={leftProps}
      position={position}
      right={
        <>
          <Link
            activeClassName={styles.active}
            className={classNames(styles.link, "hidden lg:inline-flex")}
            text="caption"
            to="/jsx"
          >
            JSX
          </Link>
          <Link
            activeClassName={styles.active}
            className={classNames(styles.link, "hidden lg:inline-flex")}
            text="caption"
            to="/mdx"
          >
            MDX
          </Link>
          <ThemeSwitch {...themeSwitchProps} />
          <Button
            className="lg:hidden"
            color="transparent"
            is="icon"
            onClick={toggleMenu}
          >
            {menuOpened ? <Icon name="x" /> : <Icon name="menu" />}
          </Button>
        </>
      }
      rightProps={{
        className: classNames(styles.nav, "justify-end"),
        ...rightProps,
      }}
      split={splitProps}
    >
      <Menu {...menuProps} isOpened={menuOpened}>
        <Link
          activeClassName={styles.active}
          className={classNames(styles.link, styles.button)}
          size="inherit"
          to="/about"
          onClick={toggleMenu}
        >
          About
          <Icon name="chevron-right" />
        </Link>
        <Link
          activeClassName={styles.active}
          className={classNames(styles.link, styles.button)}
          size="inherit"
          to="/jsx"
          onClick={toggleMenu}
        >
          JSX
          <Icon name="chevron-right" />
        </Link>
        <Link
          activeClassName={styles.active}
          className={classNames(styles.link, styles.button)}
          size="inherit"
          to="/mdx"
          onClick={toggleMenu}
        >
          MDX
          <Icon name="chevron-right" />
        </Link>
      </Menu>
    </SplitSection>
  );
};
