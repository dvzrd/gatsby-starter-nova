import React, { FC } from "react";

import { Grid, ProjectCard, Section, SectionProps, Text } from "components";
import { useProjectsQuery } from "graphql";

export interface ProjectsListingProps extends SectionProps {
  heading?: string;
  subheading?: string;
}

export const ProjectsListing: FC<ProjectsListingProps> = ({
  children,
  heading,
  subheading,
  ...rest
}) => {
  const { nodes } = useProjectsQuery();

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
      {nodes?.length && (
        <Grid gap="gap-14 md:gap-16 xl:gap-18">
          {nodes.map(
            ({
              fields: { slug },
              frontmatter: { image, subtitle, title },
              id,
            }) => (
              <ProjectCard
                key={id}
                image={image}
                slug={slug}
                subtitle={subtitle}
                title={title}
              />
            )
          )}
        </Grid>
      )}
    </Section>
  );
};
