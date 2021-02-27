import { useStaticQuery, graphql } from "gatsby";

import { GatsbyDate, GatsbyImage } from "types";

export type PostFields = {
  slug: string;
};

export type PostFrontmatter = {
  category: string;
  date: GatsbyDate;
  description?: string;
  image: GatsbyImage;
  subtitle?: string;
  tags?: string[];
  title: string;
  updated?: GatsbyDate;
};

export type PostNode = {
  excerpt: string;
  fields: PostFields;
  frontmatter: PostFrontmatter;
  id: string;
};

export interface PostsData {
  posts: {
    nodes: PostNode[];
  };
}

export const usePostsQuery = () => {
  const { posts }: PostsData = useStaticQuery(
    graphql`
      query PostsQuery {
        posts: allMdx(
          filter: {
            slug: { regex: "/blog/" }
            frontmatter: { published: { eq: true }, template: { eq: "post" } }
          }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          nodes {
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
                  fluid(maxWidth: 640, maxHeight: 480, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                name
              }
              tags
              title
            }
            id
          }
        }
      }
    `
  );

  return posts;
};
