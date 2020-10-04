import React, { FC } from "react";
import { Link } from "gatsby";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import classNames from "classnames";

import {
  BaseElement as Element,
  ElementProps,
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
  a: Link,
  Element: (props: ElementProps) => <Element {...props} />,
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
  <Element
    as={as}
    className={classNames("flex flex-col flex-wrap", className)}
    {...rest}
  >
    <MDXProvider components={{ ...mdxComponents, ...components }}>
      {body && <MDXRenderer>{body}</MDXRenderer>}
      {children}
    </MDXProvider>
  </Element>
);
