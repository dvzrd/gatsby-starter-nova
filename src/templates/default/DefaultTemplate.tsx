import React, { FC } from "react";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";
import { PageProps } from "gatsby";

import {
  ElementProps,
  Hero,
  HeroProps,
  MDX,
  MDXProps,
  Section,
  SectionProps,
} from "components";
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
      hero?: HeroProps;
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

  const heroProps: HeroProps = {
    caption: {
      heading: title,
    },
    className: "bg-background-primary text-copy-primary",
    ...hero,
  };

  const mainProps: SectionProps = {
    is: "content",
    ...main,
  };

  return (
    <DefaultLayout seo={seoProps} {...layout}>
      <Hero {...heroProps} />
      <Section {...mainProps}>
        <MDX {...mdx}>{children}</MDX>
      </Section>
    </DefaultLayout>
  );
};

export default DefaultTemplate;
