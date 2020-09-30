import React, { FC } from "react";
import classNames from "classnames";

import { Section } from "components";
import { ThemeSwitch, useThemeContext } from "contexts";

import { Brand, Topbar } from "../components";

import { DefaultLayoutProps } from "./types";
import { useSiteMetadata } from "./data.gql";

// TODO:
// - add navigation menu component

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  className,
}) => {
  const { theme } = useThemeContext();
  const { copyright } = useSiteMetadata();

  return (
    <div
      className={classNames(
        "bg-background flex flex-col min-h-screen",
        theme,
        className
      )}
    >
      <Topbar
        navLeft={
          <>
            <Brand />
          </>
        }
        navRight={
          <>
            <ThemeSwitch className="text-primary-500" />
          </>
        }
      />
      <main className="flex-1">{children}</main>
      <Section as="footer" className="z-10">
        <p className="text-sm">{copyright}</p>
      </Section>
    </div>
  );
};
