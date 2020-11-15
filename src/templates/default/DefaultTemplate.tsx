import React, { FC } from "react";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";
import { PageProps } from "gatsby";

import {
  Hero,
  HeroProps,
  MDX,
  MDXProps,
  Section,
  SectionProps,
} from "components";
import { DefaultLayout, DefaultLayoutProps } from "layouts";

export type PageFrontmatter = {
  container?: SectionProps;
  description: string;
  hero?: HeroProps;
  layout?: DefaultLayoutProps;
  main?: SectionProps;
  mdx?: MDXProps;
  seo?: GatsbySeoProps;
  title: string;
};

export interface PageContext {
  frontmatter: PageFrontmatter;
  slug: string;
}

export interface DefaultTemplateProps extends PageProps {
  pageContext: PageContext;
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

  const layoutProps: DefaultLayoutProps = {
    header: {
      bgColor: "primary",
      color: "primary",
    },
    logo: {
      logoDark: "black",
      logoLight: "white",
    },
    themeSwitch: {
      mod: "text-color-primary",
    },
    ...layout,
  };

  const heroProps: HeroProps = {
    caption: {
      heading: title,
    },
    bgColor: "primary",
    color: "primary",
    minH: "screen-1/2",
    ...hero,
  };

  const mainProps: SectionProps = {
    pattern: "content",
    ...main,
  };

  return (
    <DefaultLayout seo={seoProps} {...layoutProps}>
      <Hero {...heroProps} />
      <Section {...mainProps}>
        <MDX {...mdx}>{children}</MDX>
      </Section>
    </DefaultLayout>
  );
};

export default DefaultTemplate;
