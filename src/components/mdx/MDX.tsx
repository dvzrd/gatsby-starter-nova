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
  Pattern,
  PatternProps,
  Section,
  SectionProps,
  Text,
  TextProps,
} from "components";

export interface MDXProps extends ElementProps {
  body?: string;
  components?: MDXProviderComponents;
}

export const mdxComponents = {
  a: (props: LinkProps) => <Link {...props} />,
  h1: (props: TextProps) => <Text as="h1" pattern="hero" {...props} />,
  h2: (props: TextProps) => <Text as="h2" pattern="heading" {...props} />,
  h3: (props: TextProps) => <Text as="h3" pattern="title" {...props} />,
  h4: (props: TextProps) => <Text as="h4" pattern="subheading" {...props} />,
  h5: (props: TextProps) => <Text as="h5" pattern="subtitle" {...props} />,
  h6: (props: TextProps) => (
    <Text
      as="h6"
      pattern="body"
      mod="font-semibold mt-4 mb-2 md:mt-6 md:mb-3 xl:mt-8 xl:mb-4"
      {...props}
    />
  ),
  p: (props: TextProps) => (
    <Text as="p" mod="mb-4 md:mb-6 xl:mb-8" {...props} />
  ),
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
  <Pattern
    as={as}
    {...rest}
    className={classNames("flex flex-col flex-wrap", className)}
  >
    <MDXProvider components={{ ...mdxComponents, ...components }}>
      {body && <MDXRenderer>{body}</MDXRenderer>}
      {children}
    </MDXProvider>
  </Pattern>
);
