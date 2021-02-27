import React, { FC } from "react";
import clsx from "clsx";

import { Section, SectionProps } from "components";
import { Brand } from "containers";
import { LayoutLogoProps } from "layouts";

import styles from "./PanelHeader.module.css";

export interface PanelHeaderProps extends SectionProps {
  isHidden?: boolean;
  logo?: LayoutLogoProps;
}

export const PanelHeader: FC<PanelHeaderProps> = ({
  as = "header",
  children,
  className,
  is = "navbar",
  isHidden,
  logo,
  ...rest
}) => {
  if (isHidden) return null;

  return (
    <Section
      as={as}
      is={is}
      {...(rest as SectionProps)}
      className={clsx(styles.header, className)}
    >
      <Brand {...logo} />
    </Section>
  );
};
