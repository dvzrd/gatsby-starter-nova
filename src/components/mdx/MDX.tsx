import React, { FC } from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import classNames from "classnames";

import { Element, Section, ElementProps } from "components";

export interface MDXProps extends ElementProps {
  body?: string;
  components?: {};
}

export const mdxDefaultProps: MDXProps = {
  as: "article",
  className: "flex flex-col flex-wrap mb-8",
  components: {
    a: Link,
    // blockquote: Quote,
    // code: Code,
    // h1: (props) => <h1 {...props} />,
    // h2: TextH2,
    // h3: TextH3,
    // h4: TextH4,
    // h5: TextH5,
    // h6: TextH6,
    // hr: (props) => <hr className="divider" {...props} />,
    // img: Media,
    // inlineCode: (props) => <pre {...props} />,
    // li: (props) => <li {...props} />,
    // ol: (props) => <ol {...props} />,
    // p: Text,
    // table: Table,
    // td/th: TableCell,
    // tr: TableRow,
    // pre: (props) => <Code variant="pre" {...props} />,
    // thematicBreak: (props) => <hr className="divider-thematic" {...props} />,
    // ul: (props) => <ul {...props} />,
    Element,
    Section,
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
