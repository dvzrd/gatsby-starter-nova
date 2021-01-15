import React, { FC } from "react";
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo";
import classNames from "classnames";

import { Box, BoxProps, Section, SectionProps } from "components";
import { useTheme } from "contexts";
import { useSiteMetadataQuery } from "graphql";
import { GatsbyLocation } from "types/gatsby";

import styles from "./FormLayout.module.css";
import {
  FormFooter,
  FormFooterProps,
  FormHeader,
  FormHeaderProps,
} from "./components";

import { LayoutLogoProps } from "../default";

export interface FormLayoutProps extends SectionProps {
  footer?: FormFooterProps;
  header?: FormHeaderProps;
  location?: GatsbyLocation;
  logo?: LayoutLogoProps;
  main?: BoxProps;
  seo?: GatsbySeoProps;
}

export const FormLayout: FC<FormLayoutProps> = ({
  children,
  className,
  container,
  footer,
  header,
  is = "layout",
  location,
  logo,
  main,
  seo,
  ...rest
}) => {
  const { theme } = useTheme();
  const { name, title } = useSiteMetadataQuery();

  const containerProps: BoxProps = {
    ...container,
    className: classNames(styles.panel, container?.className),
  };

  return (
    <>
      <GatsbySeo
        titleTemplate={seo?.title ? `${name} | ${title} | %s` : `${name} | %s`}
        {...seo}
      />
      <Section
        is={is}
        {...(rest as SectionProps)}
        container={containerProps}
        className={classNames(styles.layout, theme, className)}
      >
        <FormHeader {...header} logo={logo} />
        <Box
          as="main"
          {...(main as BoxProps)}
          className={classNames(styles.main, main?.className)}
        >
          {children}
        </Box>
        <FormFooter {...footer} />
      </Section>
    </>
  );
};
