import React, { FC } from "react";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";

import { Hero, HeroProps } from "components";
import { PanelLayout, PanelLayoutProps } from "layouts";

import { PanelTemplateProps } from "./types";

export const PanelTemplate: FC<PanelTemplateProps> = ({
  children,
  isMDX,
  location,
  pageContext: {
    excerpt,
    frontmatter: {
      description,
      hero,
      layout,
      main,
      page,
      seo,
      showHeader = true,
      subtitle,
      template,
      title,
    },
  },
}) => {
  const pageId = page
    ? `page-${page}`
    : template
    ? `page-${template}`
    : "page-panel";

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

  const layoutProps: PanelLayoutProps = {
    location,
    isMDX,
    main,
    ...layout,
  };

  const heroProps: HeroProps = {
    on: pageId,
    ...hero,
    caption: {
      heading: title,
      subheading: subtitle,
      ...hero?.caption,
    },
  };

  return (
    <PanelLayout seo={seoProps} {...layoutProps}>
      {showHeader && <Hero {...heroProps} />}
      {children}
    </PanelLayout>
  );
};

export default PanelTemplate;
