import React, { FC } from "react";
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo";
import classNames from "classnames";

import { ButtonProps, Box, BoxProps, MenuProps } from "components";
import { LogoName } from "containers";
import { useTheme } from "contexts";
import { GatsbyLocation } from "types/gatsby";

import {
  LayoutFooter,
  LayoutFooterProps,
  LayoutHeader,
  LayoutHeaderProps,
} from "./components";
import styles from "./DefaultLayout.module.css";

export type LayoutPattern = "default" | "landing";

export interface LayoutLogoProps {
  logoName?: LogoName;
  logoDark?: string;
  logoLight?: string;
}

export interface DefaultLayoutProps extends BoxProps {
  footer?: LayoutFooterProps;
  header?: LayoutHeaderProps;
  location?: GatsbyLocation;
  logo?: LayoutLogoProps;
  main?: BoxProps;
  menu?: MenuProps;
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
  location,
  logo,
  main,
  menu,
  seo,
  themeSwitch,
  ...rest
}) => {
  const { theme } = useTheme();

  return (
    <>
      <GatsbySeo {...seo} />
      <Box
        {...(rest as BoxProps)}
        className={classNames(styles.layout, styles[is], theme, className)}
      >
        <LayoutHeader
          location={location}
          logo={logo}
          menu={menu}
          themeSwitch={themeSwitch}
          {...header}
        />
        <Box
          as="main"
          {...(main as BoxProps)}
          className={classNames(styles.main, main?.className)}
        >
          {children}
        </Box>
        <LayoutFooter {...footer} location={location} />
      </Box>
    </>
  );
};
