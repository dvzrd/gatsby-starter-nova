import React, { FC } from "react";
import classNames from "classnames";

import { ElementProps } from "components";
import { Brand } from "containers";
import { ThemeSwitch, useThemeContext } from "contexts";
// import { useSiteMetadata } from "graphql";

import { Footer, Topbar } from "../components";

export interface DefaultLayoutProps extends ElementProps {
  seo?: {
    description?: string;
    image?: string;
    title: string;
  };
  footerProps?: {
    className?: string;
    isHidden?: boolean;
  };
  mainProps?: {
    className?: string;
  };
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
  topbarProps,
}) => {
  const { theme } = useThemeContext();
  // const { defaultDescription, defaultTitle } = useSiteMetadata();

  return (
    <div
      className={classNames(
        "bg-background flex flex-col min-h-screen",
        theme,
        className
      )}
    >
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
