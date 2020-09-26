import React, { FC } from "react";
import classNames from "classnames";

import { ThemeSwitch, useThemeContext } from "@/contexts";

export interface LayoutProps {
  className?: string;
}

export const DefaultLayout: FC<LayoutProps> = ({ children, className }) => {
  const { theme } = useThemeContext();

  return (
    <div className={classNames("flex flex-col min-h-screen", theme, className)}>
      <header className="z-20">
        <ThemeSwitch />
      </header>
      <main className="flex-1">{children}</main>
      <footer className="z-10">Layout Footer</footer>
    </div>
  );
};
