import React, { FC } from "react";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";

import {
  PageHero,
  PageHeroProps,
  MDX,
  MDXProps,
  Section,
  SectionProps,
} from "components";
import { ContactSection } from "containers";
import { DefaultLayout, DefaultLayoutProps } from "layouts";

import { DefaultPageProps } from "./types";

const DefaultTemplate: FC<DefaultPageProps> = ({
  children,
  location,
  pageContext: {
    excerpt,
    frontmatter: {
      description,
      hero,
      layout,
      main,
      mdx,
      page,
      seo,
      showFooter = true,
      showHeader = true,
      subtitle,
      template,
      title,
      contact,
    },
  },
}) => {
  const pageId = page ? `page-${page}` : "page-default";
  const mainPattern = !template ? "main" : "content";

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

  const heroProps: PageHeroProps = {
    on: pageId,
    bgColor: "primary",
    color: "primary",
    ...hero,
    caption: {
      heading: title,
      subheading: subtitle,
      ...hero?.caption,
    },
  };

  const mainProps: SectionProps = {
    on: pageId,
    is: mainPattern,
    ...main,
  };

  return (
    <DefaultLayout seo={seoProps} {...layoutProps}>
      {showHeader && <PageHero {...heroProps} />}
      <Section {...mainProps}>
        <MDX {...(mdx as MDXProps)}>{children}</MDX>
      </Section>
      {showFooter && <ContactSection on={pageId} as="footer" {...contact} />}
    </DefaultLayout>
  );
};

export default DefaultTemplate;
