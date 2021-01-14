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
import { useTheme } from "contexts";
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
  excerpt?: string;
  frontmatter: PageFrontmatter;
  slug: string;
}

export interface DefaultTemplateProps extends PageProps {
  pageContext: PageContext;
}

const DefaultTemplate: FC<DefaultTemplateProps> = ({
  children,
  location,
  pageContext: {
    excerpt,
    frontmatter: { description, hero, layout, main, mdx, seo, title },
  },
}) => {
  const { theme } = useTheme();

  const seoProps: GatsbySeoProps = {
    title: seo?.title || title,
    description: seo?.description
      ? seo?.description
      : description
      ? description
      : excerpt,
    openGraph: {
      title: seo?.title || title,
      description: seo?.description
        ? seo?.description
        : description
        ? description
        : excerpt,
      url: location?.href,
      images: [
        {
          url: `${location?.origin}/logo.png`,
          width: 800,
          height: 800,
          alt: title,
        },
        {
          url: `${location?.origin}/logo-${theme}.png`,
          width: 800,
          height: 800,
          alt: title,
        },
      ],
      ...seo?.openGraph,
    },
    ...seo,
  };

  const layoutProps: DefaultLayoutProps = {
    header: {
      bgColor: "primary",
      color: "primary",
    },
    location,
    logo: {
      logoDark: "black",
      logoLight: "white",
    },
    themeSwitch: {
      className: "text-primary",
    },
    ...layout,
  };

  const heroProps: HeroProps = {
    caption: {
      heading: title,
    },
    bgColor: "primary",
    color: "primary",
    vh: "2/3",
    ...hero,
  };

  const mainProps: SectionProps = {
    is: "content",
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
