import { useStaticQuery, graphql } from "gatsby";

import { GatsbyDate, GatsbyImage } from "types";

export type ProjectFields = {
  slug: string;
};

export type ProjectFrontmatter = {
  category: string;
  client?: string;
  date: GatsbyDate;
  image?: GatsbyImage;
  subtitle?: string;
  tags?: string[];
  title: string;
  updated?: GatsbyDate;
  url?: string;
};

export type ProjectNode = {
  excerpt: string;
  fields: ProjectFields;
  frontmatter: ProjectFrontmatter;
  id: string;
};

export interface ProjectsData {
  projects: {
    nodes: ProjectNode[];
  };
}

export const useProjectsQuery = () => {
  const { projects }: ProjectsData = useStaticQuery(
    graphql`
      query ProjectsQuery {
        projects: allMdx(
          filter: {
            slug: { regex: "/portfolio/" }
            frontmatter: {
              published: { eq: true }
              template: { eq: "project" }
            }
          }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              category
              client
              date(formatString: "MMMM DD, YYYY")
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 1280, maxHeight: 900, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                name
              }
              subtitle
              tags
              title
              updated
              url
            }
            id
          }
        }
      }
    `
  );

  return projects;
};
