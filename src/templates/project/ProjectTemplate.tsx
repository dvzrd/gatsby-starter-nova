import React, { FC } from "react";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";
import { graphql } from "gatsby";

import {
  ProjectHero,
  ProjectHeroProps,
  MDX,
  MDXProps,
  Section,
  SectionProps,
} from "components";
import { ContactSection } from "containers";
import { DefaultLayout, DefaultLayoutProps } from "layouts";

import { ProjectTemplateProps } from "./types";

const ProjectTemplate: FC<ProjectTemplateProps> = ({
  data: {
    project: {
      body,
      excerpt,
      frontmatter: {
        description,
        hero,
        image,
        layout,
        main,
        mdx,
        page,
        seo,
        showFooter = true,
        showHeader = true,
        subtitle,
        title,
      },
    },
  },
  location,
}) => {
  const pageId = page ? `page-${page}` : "page-project";

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
          url: `${location?.origin}${image?.childImageSharp?.fluid?.src}`,
          width: 1280,
          height: 1280,
          alt: title,
        },
      ],
      ...seo?.openGraph,
    },
    ...seo,
  };

  const layoutProps: DefaultLayoutProps = {
    on: pageId,
    header: {
      bgColor: "paper",
      color: "paper",
    },
    themeSwitch: {
      className: "text-paper hover:text-paper-hover",
    },
    ...layout,
  };

  const heroProps: ProjectHeroProps = {
    on: pageId,
    caption: {
      heading: title,
      subheading: subtitle,
    },
    media: {
      ...hero?.media,
      image: {
        ...image,
        name: title,
        ...hero?.media?.image,
      },
    },
    ...hero,
  };

  const mainProps: SectionProps = {
    on: pageId,
    ...main,
  };

  return (
    <DefaultLayout seo={seoProps} {...layoutProps}>
      {showHeader && <ProjectHero {...heroProps} />}
      <Section {...mainProps}>
        <MDX {...(mdx as MDXProps)} body={body} />
      </Section>
      {showFooter && <ContactSection on={pageId} as="footer" />}
    </DefaultLayout>
  );
};

export const projectBySlugQuery = graphql`
  query ProjectBySlug($slug: String!) {
    project: mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      fields {
        slug
      }
      frontmatter {
        category
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        page
        subtitle
        tags
        title
      }
    }
  }
`;

export default ProjectTemplate;
