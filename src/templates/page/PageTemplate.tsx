import React, { FC } from "react";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";
import { find } from "lodash";

import {
  PageHero,
  PageHeroProps,
  MDX,
  MDXProps,
  Section,
  SectionProps,
} from "components";
import { Contact } from "containers";
import { DefaultLayout, DefaultLayoutProps } from "layouts";
import { useTheme } from "contexts";
import { useMediaQuery } from "graphql";

import { DefaultPageProps } from "../types";

export const PageTemplate: FC<DefaultPageProps> = ({
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
  const { theme } = useTheme();
  const media = useMediaQuery();
  const image = find(media, ["name", `${page}-hero-${theme}`]);
  const pageId = page
    ? `page-${page}`
    : template
    ? `page-${template}`
    : "page-default";

  const mainPattern =
    !main?.is && !template ? "main" : main?.is ? main.is : "content";

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
          url: image
            ? `${location?.origin}${image?.childImageSharp?.fluid?.src}`
            : `${location?.origin}/logo.png`,
          width: 1024,
          height: 1024,
          alt: title,
        },
      ],
      ...seo?.openGraph,
    },
    ...seo,
  };

  const layoutProps: DefaultLayoutProps = {
    location,
    header: {
      activeClassName: "text-primary-hover dark:text-primary-contrast-hover",
      className: "bg-primary dark:bg-primary-contrast",
      textClassName:
        "text-primary hover:text-primary-hover dark:text-primary-contrast dark:hover:text-primary-contrast-hover",
    },
    ...layout,
  };

  const heroProps: PageHeroProps = {
    on: pageId,
    className:
      "bg-primary text-primary dark:bg-primary-contrast dark:text-primary-contrast",
    ...hero,
    caption: {
      heading: title,
      subheading: subtitle,
      ...hero?.caption,
    },
    // media: image && {
    //   image,
    //   ...hero?.media,
    // },
  };

  const mainProps: SectionProps = {
    on: pageId,
    is: mainPattern,
    isContained: mainPattern === "content" ? true : false,
    ...main,
  };

  return (
    <DefaultLayout seo={seoProps} {...layoutProps}>
      {showHeader && <PageHero {...heroProps} />}
      <Section {...mainProps}>
        <MDX {...(mdx as MDXProps)}>{children}</MDX>
      </Section>
      {showFooter && <Contact on={pageId} {...contact} />}
    </DefaultLayout>
  );
};

export default PageTemplate;
