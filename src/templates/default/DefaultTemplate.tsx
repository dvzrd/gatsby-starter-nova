import React, { FC } from "react";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";
import { PageProps } from "gatsby";

import { ElementProps, MDX, MDXProps, Section, SectionProps } from "components";
import { DefaultLayout, LayoutSection } from "layouts";

export type LayoutProps = {
  footer?: LayoutSection;
  main?: ElementProps;
  topbar?: LayoutSection;
};

export interface DefaultTemplateProps extends PageProps {
  pageContext: {
    frontmatter: {
      container?: SectionProps;
      description: string;
      hero?: SectionProps;
      layout?: LayoutProps;
      main?: SectionProps;
      mdx?: MDXProps;
      seo?: GatsbySeoProps;
      title: string;
    };
  };
}

const DefaultTemplate: FC<DefaultTemplateProps> = ({
  children,
  pageContext: {
    frontmatter: { description, hero, layout, main, mdx, seo, title },
  },
}) => {
  const seoProps: GatsbySeoProps = {
    description,
    title,
    ...seo,
  };

  const heroProps: SectionProps = {
    as: "header",
    className: "bg-background-paper text-copy-paper",
    pattern: "feature",
    ...hero,
  };

  const mainProps: SectionProps = {
    pattern: "content",
    ...main,
  };

  return (
    <DefaultLayout seo={seoProps} {...layout}>
      <Section {...heroProps}>
        <h2 className="leading-tight text-copy">{title}</h2>
      </Section>
      <Section {...mainProps}>
        <MDX {...mdx}>{children}</MDX>
      </Section>
    </DefaultLayout>
  );
};

export default DefaultTemplate;
