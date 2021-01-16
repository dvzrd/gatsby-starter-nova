import React, { FC } from "react";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";
import { graphql } from "gatsby";
import { kebabCase } from "lodash";

import {
  Box,
  PostHero,
  PostHeroProps,
  MDX,
  MDXProps,
  Section,
  SectionProps,
  Tag,
} from "components";
import { PostAuthor, ContactSection, RecommendedPosts } from "containers";
import { DefaultLayout, DefaultLayoutProps } from "layouts";

import { PostTemplateProps } from "./types";

const PostTemplate: FC<PostTemplateProps> = ({
  data: {
    post: {
      body,
      excerpt,
      frontmatter: {
        author,
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
        showAuthor = true,
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
  const pageId = page ? `page-${page}` : "page-post";

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
        authors: [`${location?.origin}/about/#${kebabCase(author)}`],
        tags,
        ...seo?.openGraph?.article,
      },
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
      {showHeader && <PostHero {...heroProps} />}
      <Section {...mainProps}>
        <MDX {...(mdx as MDXProps)} body={body} />
      </Section>
      {showAuthor && (
        <PostAuthor author={author} on={pageId}>
          {tags?.length && (
            <Box className="flex flex-row flex-wrap mt-4 md:mt-6 xl:mt-8">
              {tags.map((tag: string) => (
                <Tag is="secondary" key={tag}>
                  {tag}
                </Tag>
              ))}
            </Box>
          )}
        </PostAuthor>
      )}
      {showRecommended && (
        <RecommendedPosts
          on={pageId}
          author={author}
          category={category}
          nextPage={nextPage}
          prevPage={prevPage}
          tags={tags}
        />
      )}
      {showFooter && <ContactSection on={pageId} as="footer" />}
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
        author
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
