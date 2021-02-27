import React, { FC } from "react";
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo";
import { animated, useSpring } from "react-spring";
import clsx from "clsx";

import {
  Box,
  BoxProps,
  MDX,
  MDXProps,
  Section,
  SectionProps,
} from "components";
import { useTheme } from "contexts";
import { useSiteMetadataQuery } from "graphql";
import { GatsbyLocation } from "types";

import styles from "./PanelLayout.module.css";
import {
  PanelFooter,
  PanelFooterProps,
  PanelHeader,
  PanelHeaderProps,
} from "./components";

import { LayoutLogoProps } from "../default";

export interface PanelLayoutProps extends SectionProps {
  footer?: PanelFooterProps;
  header?: PanelHeaderProps;
  isMDX?: boolean;
  location?: GatsbyLocation;
  logo?: LayoutLogoProps;
  main?: BoxProps | MDXProps;
  seo?: GatsbySeoProps;
}

export const PanelLayout: FC<PanelLayoutProps> = ({
  children,
  className,
  container,
  footer,
  header,
  is = "layout",
  isMDX,
  location,
  logo,
  main,
  seo,
  ...rest
}) => {
  const { theme } = useTheme();
  const { name, title } = useSiteMetadataQuery();
  const animation = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 50%, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  const containerProps: BoxProps = {
    ...container,
    as: animated.div,
    style: animation,
    className: clsx(styles.panel, container?.className),
  };

  const mainProps: BoxProps | MDXProps = {
    as: animated.main,
    style: animation,
    ...main,
  };

  return (
    <>
      <GatsbySeo
        titleTemplate={seo?.title ? `${name} | ${title} | %s` : `${name} | %s`}
        {...seo}
      />
      <Section
        as={animated.div}
        is={is}
        {...(rest as SectionProps)}
        container={containerProps}
        className={clsx(styles.layout, theme, className)}
      >
        <PanelHeader {...header} logo={logo} />
        {isMDX ? (
          <MDX {...mainProps} className={clsx(styles.main, main?.className)}>
            {children}
          </MDX>
        ) : (
          <Box {...mainProps} className={clsx(styles.main, main?.className)}>
            {children}
          </Box>
        )}
        <PanelFooter {...footer} />
      </Section>
    </>
  );
};
