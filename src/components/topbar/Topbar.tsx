import React, { FC } from "react";
import classNames from "classnames";

import { Section, SectionProps } from "@/components";

import styles from "./Topbar.module.css";

export const Topbar: FC<SectionProps> = ({
  as = "header",
  children,
  className,
  containerClassName,
}) => (
  <Section
    as={as}
    className={classNames(styles.topbar, className)}
    containerClassName={containerClassName}
  >
    {children}
  </Section>
);
