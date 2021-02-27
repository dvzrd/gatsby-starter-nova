import React, { FC } from "react";
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo";
import { animated, useTransition } from "react-spring";
import clsx from "clsx";

import { ButtonProps, Box, BoxProps, MenuProps } from "components";
import { LogoName } from "containers";
import { useTheme } from "contexts";
import { GatsbyLocation } from "types";

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
  const transition = useTransition(children, location?.pathname, {
    enter: { opacity: 1 },
    from: { opacity: 0 },
    leave: { opacity: 0 },
  });

  const footerProps: LayoutFooterProps = {
    className: "bg-contrast text-contrast",
    location,
    ...footer,
  };

  const mainProps: BoxProps = {
    as: animated.main,
    ...main,
    className: clsx(styles.main, main?.className),
  };

  return (
    <>
      <GatsbySeo {...seo} />
      <Box
        {...(rest as BoxProps)}
        className={clsx(styles.layout, styles[is], theme, className)}
      >
        <LayoutHeader
          location={location}
          logo={logo}
          menu={menu}
          themeSwitch={themeSwitch}
          {...header}
        />
        {transition.map(({ key, props }) => (
          <Box key={key} style={props} {...mainProps}>
            {children}
          </Box>
        ))}
        <LayoutFooter {...footerProps} />
      </Box>
    </>
  );
};
