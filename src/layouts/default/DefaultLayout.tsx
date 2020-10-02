import React, { FC } from "react";
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo";
import classNames from "classnames";

import { ElementProps } from "components";
import { Brand } from "containers";
import { ThemeSwitch, useThemeContext } from "contexts";

import { Footer, Topbar } from "../components";

export type DefaultLayoutSection = {
  className?: string;
  isHidden?: boolean;
};

export interface DefaultLayoutProps extends ElementProps {
  footerProps?: DefaultLayoutSection;
  mainProps?: ElementProps;
  seoProps?: GatsbySeoProps;
  topbarProps?: DefaultLayoutSection;
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

  return (
    <div
      className={classNames(
        "bg-background flex flex-col min-h-screen",
        theme,
        className
      )}
    >
      <GatsbySeo {...seoProps} />
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
