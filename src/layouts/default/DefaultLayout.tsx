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
    isHidden?: boolean;
  };
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  className,
  footerProps,
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
      />
      <main className="flex-1">{children}</main>
      <Footer {...footerProps} />
    </div>
  );
};
