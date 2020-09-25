import React from "react";
import classNames from "classnames";

export interface LayoutProps {
  className?: string;
}

export const DefaultLayout: React.FC<LayoutProps> = ({
  children,
  className,
}) => (
  <div className={classNames("flex flex-col min-h-screen", className)}>
    <header className="z-20">Layout Header</header>
    <main className="flex-1">{children}</main>
    <footer className="z-10">Layout Footer</footer>
  </div>
);
