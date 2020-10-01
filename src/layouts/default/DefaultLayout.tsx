import React, { FC } from "react";
import classNames from "classnames";

import { ElementProps, Section } from "components";
import { Brand } from "containers";
import { ThemeSwitch, useThemeContext } from "contexts";

import { Topbar } from "../components";
import { useSiteMetadata } from "graphql";

export interface DefaultLayoutProps extends ElementProps {
  seo?: {
    description?: string;
    image?: string;
    title: string;
  };
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  className,
}) => {
  const { theme } = useThemeContext();
  const { copyright, memorial } = useSiteMetadata();

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
      <Section as="footer" className="z-10">
        <p className="text-sm">{copyright}</p>
        <p className="text-sm">{memorial}</p>
      </Section>
    </div>
  );
};
