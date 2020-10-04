import React, { FC } from "react";
import { Link } from "gatsby";
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo";
import classNames from "classnames";

import { ElementProps } from "components";
import { Brand } from "containers";
import { ThemeSwitch, useTheme } from "contexts";

import { Footer, Topbar } from "../components";

export type LayoutSection = {
  className?: string;
  isHidden?: boolean;
};

export interface DefaultLayoutProps extends ElementProps {
  footer?: LayoutSection;
  main?: ElementProps;
  seo?: GatsbySeoProps;
  topbar?: LayoutSection;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  className,
  footer,
  main,
  seo,
  topbar,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames(
        "bg-background flex flex-col min-h-screen",
        theme,
        className
      )}
    >
      <GatsbySeo {...seo} />
      <Topbar
        navLeft={<Brand />}
        navRight={
          <>
            <Link className="mr-6 text-copy" to="/about">
              About
            </Link>
            <ThemeSwitch className="text-primary-500" />
          </>
        }
        {...topbar}
      />
      <main {...main} className={classNames("flex-1", main?.className)}>
        {children}
      </main>
      <Footer {...footer} />
    </div>
  );
};
