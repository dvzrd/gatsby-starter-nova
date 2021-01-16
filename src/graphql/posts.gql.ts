import { useStaticQuery, graphql } from "gatsby";

import { GatsbyImage } from "types/gatsby";

export type PostFields = {
  slug: string;
};

export type PostFrontmatter = {
  author?: string;
  category: string;
  date: string;
  description?: string;
  image: GatsbyImage;
  published: boolean;
  tags?: string[];
  title: string;
};

export type PostNode = {
  node: {
    excerpt: string;
    fields: PostFields;
    frontmatter: PostFrontmatter;
    id: string;
  };
};

export interface PostsData {
  posts: {
    edges: PostNode[];
  };
}

export const usePostsQuery = () => {
  const { posts }: PostsData = useStaticQuery(
    graphql`
      query PostsQuery {
        posts: allMdx(
          filter: {
            slug: { regex: "/posts/" }
            frontmatter: { published: { eq: true } }
          }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
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
                    fluid(maxWidth: 640, maxHeight: 480, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                  name
                }
                published
                tags
                title
              }
              id
            }
          }
        }
      }
    `
  );

  return posts;
};
