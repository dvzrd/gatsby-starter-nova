import React, { FC } from "react";
import { Link } from "gatsby";
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";
import { Brand, LogoColor } from "containers";
import { ThemeSwitch, useTheme } from "contexts";

import styles from "./DefaultLayout.module.css";
import {
  LayoutFooter,
  LayoutFooterProps,
  LayoutHeader,
  LayoutHeaderProps,
} from "../components";

export type LayoutPattern = "default" | "form";

export interface DefaultLayoutProps extends PatternProps {
  footer?: LayoutFooterProps;
  header?: LayoutHeaderProps;
  logoColor?: LogoColor;
  logoDark?: LogoColor;
  logoLight?: LogoColor;
  main?: PatternProps;
  pattern?: LayoutPattern;
  seo?: GatsbySeoProps;
  switchClassName?: string;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  className,
  footer,
  header,
  is = "wrapper",
  logoColor,
  main,
  pattern = "default",
  seo,
  switchClassName,
  ...rest
}) => {
  const { theme } = useTheme();

  return (
    <Pattern
      is={is}
      {...rest}
      className={classNames(styles.layout, styles[pattern], theme, className)}
    >
      <GatsbySeo {...seo} />
      <LayoutHeader
        navLeft={
          <>
            <Brand className="mr-6" logoColor={logoColor} />
            <Link className="mr-6 text-up-sm" to="/about">
              About
            </Link>
          </>
        }
        navRight={
          <>
            <Link className="mr-6 text-up-sm" to="/jsx">
              JSX
            </Link>
            <ThemeSwitch className={switchClassName} />
          </>
        }
        {...header}
      />
      <Pattern as="main" is="main" {...main}>
        {children}
      </Pattern>
      <LayoutFooter {...footer} />
    </Pattern>
  );
};
