import { useStaticQuery, graphql } from "gatsby";

import { GatsbyImage } from "types/gatsby";

export type ProjectFields = {
  slug: string;
};

export type ProjectFrontmatter = {
  image?: GatsbyImage;
  subtitle?: string;
  title: string;
};

export type ProjectNode = {
  node: {
    excerpt: string;
    fields: ProjectFields;
    frontmatter: ProjectFrontmatter;
    id: string;
  };
};

export interface ProjectsData {
  projects: {
    edges: ProjectNode[];
  };
}

export const useProjectsQuery = () => {
  const { projects }: ProjectsData = useStaticQuery(
    graphql`
      query ProjectsQuery {
        projects: allMdx(
          filter: {
            slug: { regex: "/projects/" }
            frontmatter: { published: { eq: true } }
          }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                image {
                  childImageSharp {
                    fluid(maxWidth: 640, maxHeight: 480, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                  name
                }
                subtitle
                title
              }
              id
            }
          }
        }
      }
    `
  );

  return projects;
};
