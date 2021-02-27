import React, { FC } from "react";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";
import { graphql } from "gatsby";

import {
  PostHero,
  PostHeroProps,
  MDX,
  MDXProps,
  Section,
  SectionProps,
} from "components";
import { Contact, RecommendedBlog } from "containers";
import { DefaultLayout, DefaultLayoutProps } from "layouts";

import { PostTemplateProps } from "./types";

export const PostTemplate: FC<PostTemplateProps> = ({
  data: {
    post: {
      body,
      excerpt,
      frontmatter: {
        category,
        date,
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
        showRecommended = true,
        subtitle,
        tags,
        title,
      },
    },
  },
  location,
  pageContext: { nextPage, prevPage },
}) => {
  const pageId = page
    ? `page-${page}-${seo?.title || title}`
    : `page-post-${seo?.title || title}`;

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
      type: "article",
      article: {
        publishedTime: new Date(date).toISOString(),
        modifiedTime: new Date(date).toISOString(),
        section: category,
        authors: [`${location?.origin}/about}`],
        tags,
        ...seo?.openGraph?.article,
      },
      images: [
        {
          url: `${location?.origin}/${image?.childImageSharp?.fluid?.src}`,
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
      color: "paper",
    },
    themeSwitch: {
      className: "text-paper hover:text-paper-hover",
    },
    ...layout,
  };

  const heroProps: PostHeroProps = {
    on: pageId,
    caption: {
      meta: `Posted on ${date} in ${category}`,
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
      <>
        {showHeader && <PostHero {...heroProps} />}
        <Section {...mainProps}>
          <MDX {...(mdx as MDXProps)} body={body} />
        </Section>
        {showRecommended && (
          <RecommendedBlog
            on={pageId}
            category={category}
            nextPage={nextPage}
            prevPage={prevPage}
            tags={tags}
          />
        )}
        {showFooter && <Contact on={pageId} />}
      </>
    </DefaultLayout>
  );
};

export const postBySlugQuery = graphql`
  query PostBySlug($slug: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
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

export default PostTemplate;
