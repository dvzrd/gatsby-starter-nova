import React, { FC } from "react";
import { Link } from "gatsby";
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";
import { Brand } from "containers";
import { ThemeSwitch, useTheme } from "contexts";

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
  main,
  pattern = "default",
  seo,
  switchClassName,
  ...rest
}) => {
  const { theme } = useTheme();

  return (
    <Pattern
      {...rest}
      className={classNames(`layout-${pattern}`, theme, className)}
    >
      <GatsbySeo {...seo} />
      <LayoutHeader
        navLeft={<Brand />}
        navRight={
          <>
            <Link className="mr-6 text-up-sm" to="/about">
              About
            </Link>
            <ThemeSwitch className={switchClassName} />
          </>
        }
        {...header}
      />
      <Pattern as="main" is="layout-main" {...main}>
        {children}
      </Pattern>
      <LayoutFooter {...footer} />
    </Pattern>
  );
};
