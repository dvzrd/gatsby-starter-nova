import React, { FC } from "react";
import classNames from "classnames";

import { Section, SectionProps } from "components";
import { Brand } from "containers";
import { LayoutLogoProps } from "layouts";

import styles from "./FormHeader.module.css";

export interface FormHeaderProps extends SectionProps {
  isHidden?: boolean;
  logo?: LayoutLogoProps;
}

export const FormHeader: FC<FormHeaderProps> = ({
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
      className={classNames(styles.header, className)}
    >
      <Brand {...logo} />
    </Section>
  );
};
