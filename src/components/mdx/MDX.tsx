import React, { FC } from "react";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import classNames from "classnames";

import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Element,
  ElementProps,
  Hero,
  HeroProps,
  Icon,
  IconProps,
  Link,
  LinkProps,
  List,
  ListProps,
  ListItem,
  ListItemProps,
  Pattern,
  PatternProps,
  Section,
  SectionProps,
  Text,
  TextProps,
} from "components";

import styles from "./MDX.module.css";

export interface MDXProps extends ElementProps {
  body?: string;
  components?: MDXProviderComponents;
}

export const mdxComponents: MDXProviderComponents = {
  a: (props: LinkProps) => <Link {...props} />,
  h1: (props: TextProps) => (
    <Text
      as="h1"
      mod="mb-4 mt-8 md:mb-6 md:mt-10 xl:mb-8 xl:mt-12"
      pattern="hero"
      {...props}
    />
  ),
  h2: (props: TextProps) => (
    <Text
      as="h2"
      mod="mb-4 mt-6 md:mb-6 md:mt-8 xl:mb-8 xl:mt-10"
      pattern="heading"
      {...props}
    />
  ),
  h3: (props: TextProps) => (
    <Text as="h3" mod="my-4 md:my-6 xl:my-8" pattern="title" {...props} />
  ),
  h4: (props: TextProps) => (
    <Text as="h4" mod="my-4 md:my-6 xl:my-8" pattern="subheading" {...props} />
  ),
  h5: (props: TextProps) => (
    <Text as="h5" mod="my-4 md:my-6 xl:my-8" pattern="subtitle" {...props} />
  ),
  h6: (props: TextProps) => (
    <Text
      as="h6"
      className={styles.h6}
      mod="my-4 md:my-6 xl:my-8"
      pattern="body"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <ListItem {...props} />,
  ol: (props: ListProps) => (
    <List as="ol" mod="mb-4 md:mb-6 xl:mb-8 pl-5" {...props} />
  ),
  p: (props: TextProps) => (
    <Text as="p" mod="mb-4 md:mb-6 xl:mb-8" {...props} />
  ),
  ul: (props: ListProps) => <List mod="mb-4 md:mb-6 xl:mb-8 pl-5" {...props} />,
  Box: (props: BoxProps) => <Box {...props} />,
  Button: (props: ButtonProps) => <Button {...props} />,
  Element: (props: ElementProps) => <Element {...props} />,
  Hero: (props: HeroProps) => <Hero {...props} />,
  Icon: (props: IconProps) => <Icon {...props} />,
  Link: (props: LinkProps) => <Link {...props} />,
  Pattern: (props: PatternProps) => <Pattern {...props} />,
  Section: (props: SectionProps) => <Section {...props} />,
  Text: (props: TextProps) => <Text {...props} />,
};

export const MDX: FC<MDXProps> = ({
  as = "article",
  body,
  children,
  className = "mb-8",
  components,
  ...rest
}) => (
  <Pattern as={as} {...rest} className={classNames(styles.mdx, className)}>
    <MDXProvider components={{ ...mdxComponents, ...components }}>
      {body && <MDXRenderer>{body}</MDXRenderer>}
      {children}
    </MDXProvider>
  </Pattern>
);
