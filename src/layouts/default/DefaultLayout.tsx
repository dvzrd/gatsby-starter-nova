import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";

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
      <header className="z-20">
        <ThemeSwitch className="text-primary-500" />
      </header>
      <main className="flex-1">{children}</main>
      <footer className="z-10">Layout Footer</footer>
    </div>
  );
};
