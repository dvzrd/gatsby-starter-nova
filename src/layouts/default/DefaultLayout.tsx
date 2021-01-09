import React, { FC, useState } from "react";
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo";
import classNames from "classnames";

import { Button, ButtonProps, Icon, Link, Box, BoxProps } from "components";
import { Brand, LogoName } from "containers";
import { ThemeSwitch, useTheme } from "contexts";

import styles from "./DefaultLayout.module.css";
import {
  LayoutFooter,
  LayoutFooterProps,
  LayoutHeader,
  LayoutHeaderProps,
  LayoutMenu,
  LayoutMenuProps,
} from "../components";

export type LayoutPattern = "default" | "form";

export interface LayoutLogoProps {
  logoName?: LogoName;
  logoDark?: string;
  logoLight?: string;
}

export interface DefaultLayoutProps extends BoxProps {
  footer?: LayoutFooterProps;
  header?: LayoutHeaderProps;
  logo?: LayoutLogoProps;
  main?: BoxProps;
  menu?: LayoutMenuProps;
  pattern?: LayoutPattern;
  seo?: GatsbySeoProps;
  themeSwitch?: ButtonProps;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  className,
  footer,
  header,
  is = "default",
  logo,
  main,
  menu,
  seo,
  themeSwitch,
  ...rest
}) => {
  const { theme } = useTheme();
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  const themeSwitchProps: ButtonProps = {
    className: "text-primary-500",
    ...themeSwitch,
  };

  const menuProps: LayoutMenuProps = {
    className: "lg:hidden",
    ...menu,
  };

  return (
    <Box
      {...(rest as BoxProps)}
      className={classNames(styles.layout, styles[is], theme, className)}
    >
      <GatsbySeo {...seo} />
      <LayoutHeader
        isMenuOpened={menuOpened}
        // isFixed={headerFixed}
        navLeft={
          <>
            <Brand className="mr-6" {...logo} />
            <Link
              className="mr-6 hidden lg:inline-flex"
              is="button"
              text="meta"
              to="/about"
            >
              About
            </Link>
          </>
        }
        navRight={
          <>
            <Link
              className="mr-6 hidden lg:inline-flex"
              is="button"
              text="meta"
              to="/jsx"
            >
              JSX
            </Link>
            <Link
              className="mr-6 hidden lg:inline-flex"
              is="button"
              text="meta"
              to="/mdx"
            >
              MDX
            </Link>
            <ThemeSwitch {...themeSwitchProps} />
            <Button
              className="ml-6 lg:hidden"
              color="transparent"
              is="icon"
              onClick={toggleMenu}
            >
              {menuOpened ? <Icon name="x" /> : <Icon name="menu" />}
            </Button>
          </>
        }
        {...header}
      >
        <LayoutMenu {...menuProps} isOpened={menuOpened}>
          <Link
            className={classNames(styles.link, "p-2 sm:p-3 md:p-4")}
            is="button"
            size="inherit"
            to="/about"
            onClick={toggleMenu}
          >
            About
            <Icon name="chevron-right" />
          </Link>
          <Link
            className={classNames(styles.link, "p-2 sm:p-3 md:p-4")}
            is="button"
            size="inherit"
            to="/jsx"
            onClick={toggleMenu}
          >
            JSX
            <Icon name="chevron-right" />
          </Link>
          <Link
            className={classNames(styles.link, "p-2 sm:p-3 md:p-4")}
            is="button"
            size="inherit"
            to="/mdx"
            onClick={toggleMenu}
          >
            MDX
            <Icon name="chevron-right" />
          </Link>
        </LayoutMenu>
      </LayoutHeader>
      <Box
        as="main"
        {...(main as BoxProps)}
        className={classNames(styles.main, main?.className)}
      >
        {children}
      </Box>
      <LayoutFooter {...footer} />
    </Box>
  );
};
