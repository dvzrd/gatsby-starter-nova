import React from "react";
import classNames from "classnames";

import styles from "./Layout.module.css";

interface LayoutProps {
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => (
  <div className={classNames(styles.container, className)}>
    <header className={styles.header}>Layout Header</header>
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>Layout Footer</footer>
  </div>
);
