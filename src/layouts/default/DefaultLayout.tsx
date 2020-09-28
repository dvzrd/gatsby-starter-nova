import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";

import { Section, Topbar } from "@/components";
import { ThemeSwitch, useThemeContext } from "@/contexts";

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const DefaultLayout: FC<LayoutProps> = ({ children, className }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(
        "bg-background flex flex-col min-h-screen",
        theme,
        className
      )}
    >
      <Topbar>
        <ThemeSwitch className="text-primary-500" />
      </Topbar>
      <main className="flex-1">{children}</main>
      <Section as="footer" className="z-10">
        <p>Layout footer</p>
      </Section>
    </div>
  );
};
