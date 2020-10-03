import React, { FC } from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import classNames from "classnames";

import { Element, Section, SectionProps, ElementProps } from "components";

export interface MDXProps extends ElementProps {
  body?: string;
  components?: {};
}

export const mdxDefaultProps: MDXProps = {
  as: "article",
  className: "flex flex-col flex-wrap mb-8",
  components: {
    a: Link,
    Element: (props: ElementProps) => <Element {...props} />,
    Section: (props: SectionProps) => <Section {...props} />,
  },
};

export const MDX: FC<MDXProps> = ({ as, children, className, components }) => {
  const providerComponents = {
    ...mdxDefaultProps.components,
    ...components,
  };

  return (
    <Element
      as={as || mdxDefaultProps.as}
      className={classNames(mdxDefaultProps.className, className)}
    >
      <MDXProvider components={providerComponents}>{children}</MDXProvider>
    </Element>
  );
};
