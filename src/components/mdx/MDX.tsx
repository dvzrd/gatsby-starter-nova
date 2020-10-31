import React, { FC } from "react";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import classNames from "classnames";

import {
  Box,
  BoxProps,
  Element,
  ElementProps,
  Hero,
  HeroProps,
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
  p: (props: TextProps) => <Text {...props} as="p" />,
  Box: (props: BoxProps) => <Box {...props} />,
  Element: (props: ElementProps) => <Element {...props} />,
  Hero: (props: HeroProps) => <Hero {...props} />,
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
