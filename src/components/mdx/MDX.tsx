import React, { FC } from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import classNames from "classnames";

import { Element, Section, SectionProps, ElementProps } from "components";

export interface MDXProps extends ElementProps {
  body?: string;
  components?: {};
}

export const mdxDefaultComponents = {
  a: Link,
  Element: (props: ElementProps) => <Element {...props} />,
  Section: (props: SectionProps) => <Section {...props} />,
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
    <MDXProvider components={{ ...mdxDefaultComponents, ...components }}>
      {body && <MDXRenderer>{body}</MDXRenderer>}
      {children}
    </MDXProvider>
  </Element>
);
