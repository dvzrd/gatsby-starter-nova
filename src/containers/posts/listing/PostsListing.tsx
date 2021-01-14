import React, { FC } from "react";

import { Grid, PostCard, Section, SectionProps, Text } from "components";
import { usePostsQuery } from "graphql";

export interface PostsListingProps extends SectionProps {
  heading?: string;
  subheading?: string;
}

export const PostsListing: FC<PostsListingProps> = ({
  children,
  heading,
  subheading,
  ...rest
}) => {
  const { edges } = usePostsQuery();

  return (
    <Section is="feature" {...(rest as SectionProps)}>
      {heading && (
        <Text as="h3" className="mb-4 md:mb-5 xl:mb-6" is="title">
          {heading}
        </Text>
      )}
      {subheading && (
        <Text as="p" className="mb-8 md:mb-10 xl:mb-12">
          {subheading}
        </Text>
      )}
      {children}
      {edges?.length && (
        <Grid gap="gap-14 md:gap-16 xl:gap-18">
          {edges.map(
            ({
              node: {
                excerpt,
                frontmatter: { category, date, image, title },
                id,
                slug,
              },
            }) => (
              <PostCard
                key={id}
                category={category}
                date={date}
                excerpt={excerpt}
                image={image}
                slug={slug}
                title={title}
              />
            )
          )}
        </Grid>
      )}
    </Section>
  );
};
