import React, { FC, useState } from "react";
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo";
import classNames from "classnames";

import {
  Button,
  ButtonProps,
  Icon,
  Link,
  Pattern,
  PatternProps,
} from "components";
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

export interface DefaultLayoutProps extends PatternProps {
  footer?: LayoutFooterProps;
  header?: LayoutHeaderProps;
  logo?: LayoutLogoProps;
  main?: PatternProps;
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
  is = "wrapper",
  logo,
  main,
  menu,
  pattern = "default",
  seo,
  themeSwitch,
  ...rest
}) => {
  const { theme } = useTheme();
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  const themeSwitchProps: ButtonProps = {
    mod: "text-primary-500",
    ...themeSwitch,
  };

  const menuProps: LayoutMenuProps = {
    mod: "lg:hidden",
    ...menu,
  };

  return (
    <Pattern
      is={is}
      {...rest}
      className={classNames(styles.layout, styles[pattern], theme, className)}
    >
      <GatsbySeo {...seo} />
      <LayoutHeader
        isMenuOpened={menuOpened}
        // isFixed={headerFixed}
        navLeft={
          <>
            <Brand className="mr-6" {...logo} />
            <Link
              mod="mr-6 hidden lg:inline-flex"
              pattern="button"
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
              mod="mr-6 hidden lg:inline-flex"
              pattern="button"
              text="meta"
              to="/jsx"
            >
              JSX
            </Link>
            <Link
              mod="mr-6 hidden lg:inline-flex"
              pattern="button"
              text="meta"
              to="/mdx"
            >
              MDX
            </Link>
            <ThemeSwitch {...themeSwitchProps} />
            <Button
              color="transparent"
              mod="ml-6 lg:hidden"
              pattern="icon"
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
            className={styles.link}
            mod="p-2 sm:p-3 md:p-4"
            pattern="button"
            size="inherit"
            to="/about"
            onClick={toggleMenu}
          >
            About
            <Icon name="chevron-right" />
          </Link>
          <Link
            className={styles.link}
            mod="p-2 sm:p-3 md:p-4"
            pattern="button"
            size="inherit"
            to="/jsx"
            onClick={toggleMenu}
          >
            JSX
            <Icon name="chevron-right" />
          </Link>
          <Link
            className={styles.link}
            mod="p-2 sm:p-3 md:p-4"
            pattern="button"
            size="inherit"
            to="/mdx"
            onClick={toggleMenu}
          >
            MDX
            <Icon name="chevron-right" />
          </Link>
        </LayoutMenu>
      </LayoutHeader>
      <Pattern as="main" is="main" {...main}>
        {children}
      </Pattern>
      <LayoutFooter {...footer} />
    </Pattern>
  );
};
