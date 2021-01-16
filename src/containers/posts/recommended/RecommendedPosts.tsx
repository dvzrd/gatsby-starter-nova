import React, { FC } from "react";

import { Grid, PostCard, Section, SectionProps, Text } from "components";
import { PageContextData } from "templates";

export interface RecommendedPostsProps extends SectionProps {
  author?: string;
  category?: string;
  heading?: string;
  nextPage?: PageContextData;
  prevPage?: PageContextData;
  subheading?: string;
  tags?: string[];
}

// TODO:
// - render posts with matching author, category, and tags.

export const RecommendedPosts: FC<RecommendedPostsProps> = ({
  children,
  className = "bg-gray-75 dark:bg-gray-500",
  heading = "More from the blog",
  nextPage,
  prevPage,
  subheading,
  ...rest
}) => (
  <Section is="feature" {...(rest as SectionProps)} className={className}>
    {heading && (
      <Text as="h3" className="mb-4 md:mb-5 xl:mb-6 font-light" is="heading">
        {heading}
      </Text>
    )}
    {subheading && (
      <Text as="p" className="mb-8 md:mb-10 xl:mb-12">
        {subheading}
      </Text>
    )}
    {children}
    {(nextPage || prevPage) && (
      <Grid
        cols="sm:grid-cols-6"
        gap="gap-4 md:gap-6 xl:gap-8"
        className="mt-4 md:mt-6 xl:mt-8"
      >
        {prevPage && (
          <PostCard
            className={`${nextPage ? "sm:col-span-3" : "sm:col-span-6"}`}
            category={prevPage.frontmatter?.category}
            date={prevPage.frontmatter?.date}
            excerpt={prevPage.excerpt}
            slug={prevPage.slug}
            title={prevPage.frontmatter?.title}
          />
        )}
        {nextPage && (
          <PostCard
            className={`${prevPage ? "sm:col-span-3" : "sm:col-span-6"}`}
            category={nextPage.frontmatter?.category}
            date={nextPage.frontmatter?.date}
            excerpt={nextPage.excerpt}
            slug={nextPage.slug}
            title={nextPage.frontmatter?.title}
          />
        )}
      </Grid>
    )}
  </Section>
);
