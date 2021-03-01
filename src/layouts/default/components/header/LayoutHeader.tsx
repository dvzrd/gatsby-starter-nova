import React, { FC, useEffect, useState } from "react";
import clsx from "clsx";
import { BsFillGrid1X2Fill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { CgChevronRight, CgClose } from "react-icons/cg";
import { animated, config, useSpring } from "react-spring";
import { useMedia } from "react-use";

import {
  BoxProps,
  Button,
  ButtonProps,
  Link,
  Menu,
  MenuProps,
  SplitSection,
  SplitSectionProps,
} from "components";
import { Brand } from "containers";
import { ThemeSwitch } from "contexts";
import { LayoutLogoProps } from "layouts";
import { GatsbyLocation } from "types";

import styles from "./LayoutHeader.module.css";

// TODO:
// - add chained animations and transitions: https://codesandbox.io/embed/2v716k56pr

export interface LayoutHeaderProps extends SplitSectionProps {
  activeClassName?: string;
  isFixed?: boolean;
  isHidden?: boolean;
  location?: GatsbyLocation;
  logo?: LayoutLogoProps;
  menu?: MenuProps;
  textClassName?: string;
  themeSwitch?: ButtonProps;
  toggleMenu?: () => void;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({
  activeClassName = "underline",
  as = "header",
  className,
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
  textClassName,
  themeSwitch,
  ...rest
}) => {
  const isWide = useMedia("(min-width: 1024px)");
  const [menuOpened, setMenuOpened] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  if (isHidden) return null;

  const toggleMenu = () => setMenuOpened(!menuOpened);

  const containerProps: BoxProps = {
    className: styles.headerContainer,
    ...container,
  };

  const menuProps: MenuProps = {
    as: animated.aside,
    order: 1,
    style: useSpring({
      config: config.stiff,
      opacity: menuOpened ? 1 : 0,
      transform: menuOpened
        ? "translate3d(0, 0, 0)"
        : "translate3d(0, -100%, 0)",
    }),
    ...menu,
    className: clsx(
      menuOpened && "mt-4 xs:mt-6 xs:mb-8 sm:mt-8 sm:mb-10 md:mt-10 md:mb-12",
      menu?.className
    ),
  };

  const splitProps: BoxProps = {
    order: 0,
    ...split,
    className: clsx(styles.nav, split?.className),
  };

  const themeSwitchProps: ButtonProps = {
    className: textClassName,
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
      className={clsx(
        styles.header,
        menuOpened
          ? styles.opened
          : isFixed || headerFixed
          ? styles.affixed
          : styles.transparent,
        className
      )}
      container={containerProps}
      left={left ? left : <Brand {...logo} />}
      leftProps={leftProps}
      position={position}
      right={
        right ? (
          right
        ) : (
          <>
            <ThemeSwitch {...themeSwitchProps} />
            <Button className={textClassName} is="icon" onClick={toggleMenu}>
              {menuOpened ? (
                <CgClose className={styles.icon} />
              ) : isWide ? (
                <BsFillGrid3X3GapFill className="w-8 h-7 xl:w-10 xl:h-8" />
              ) : (
                <BsFillGrid1X2Fill className="w-6 h-5 md:w-8 md:h-6" />
              )}
            </Button>
          </>
        )
      }
      rightProps={{
        className: clsx(styles.nav, "justify-end"),
        ...rightProps,
      }}
      split={splitProps}
    >
      <Menu {...menuProps} isOpened={menuOpened}>
        <Link
          activeClassName={activeClassName}
          className={clsx(styles.link, styles.button, textClassName)}
          size="inherit"
          to="/about"
          onClick={toggleMenu}
        >
          About
          <CgChevronRight />
        </Link>
        <Link
          activeClassName={activeClassName}
          className={clsx(styles.link, styles.button, textClassName)}
          size="inherit"
          to="/portfolio"
          onClick={toggleMenu}
        >
          Portfolio
          <CgChevronRight />
        </Link>
        <Link
          activeClassName={activeClassName}
          className={clsx(styles.link, styles.button, textClassName)}
          size="inherit"
          to="/blog"
          onClick={toggleMenu}
        >
          Blog
          <CgChevronRight />
        </Link>
        <Link
          activeClassName={activeClassName}
          className={clsx(styles.link, styles.button, textClassName)}
          size="inherit"
          to="/contact"
          onClick={toggleMenu}
        >
          Contact
          <CgChevronRight />
        </Link>
      </Menu>
    </SplitSection>
  );
};
