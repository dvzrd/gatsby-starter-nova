import React, { FC } from "react";
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo";
import classNames from "classnames";

import { ElementProps } from "components";
import { Brand } from "containers";
import { ThemeSwitch, useThemeContext } from "contexts";
import { useSiteMetadata } from "graphql";

import { Footer, Topbar } from "../components";

export interface DefaultLayoutProps extends ElementProps {
  footerProps?: {
    className?: string;
    isHidden?: boolean;
  };
  mainProps?: ElementProps;
  seoProps?: GatsbySeoProps;
  topbarProps?: {
    className?: string;
    isHidden?: boolean;
  };
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  className,
  footerProps,
  mainProps,
  seoProps,
  topbarProps,
}) => {
  const { theme } = useThemeContext();
  const { defaultDescription, defaultTitle, name, siteUrl } = useSiteMetadata();

  return (
    <div
      className={classNames(
        "bg-background flex flex-col min-h-screen",
        theme,
        className
      )}
    >
      <GatsbySeo
        title={defaultTitle}
        titleTemplate={`%s | ${name}`}
        description={defaultDescription}
        canonical={siteUrl}
        {...seoProps}
      />
      <Topbar
        navLeft={<Brand />}
        navRight={<ThemeSwitch className="text-primary-500" />}
        {...topbarProps}
      />
      <main
        {...mainProps}
        className={classNames("flex-1", mainProps?.className)}
      >
        {children}
      </main>
      <Footer {...footerProps} />
    </div>
  );
};
