import React, { FC } from "react";
import { Link } from "gatsby";
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";
import { Brand, LogoName } from "containers";
import { ThemeSwitch, useTheme } from "contexts";

import styles from "./DefaultLayout.module.css";
import {
  LayoutFooter,
  LayoutFooterProps,
  LayoutHeader,
  LayoutHeaderProps,
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
  pattern?: LayoutPattern;
  seo?: GatsbySeoProps;
  themeSwitch?: PatternProps;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  className,
  footer,
  header,
  is = "wrapper",
  logo,
  main,
  pattern = "default",
  seo,
  themeSwitch,
  ...rest
}) => {
  const { theme } = useTheme();

  const themeSwitchProps: PatternProps = {
    className: "text-primary-500",
    ...themeSwitch,
  };

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
            <Brand className="mr-6" {...logo} />
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
            <ThemeSwitch {...themeSwitchProps} />
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
