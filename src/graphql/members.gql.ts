import { useStaticQuery, graphql } from "gatsby";

import { GatsbyImage } from "types/gatsby";

export type MemberName = "John Smith" | string;

export type MemberTitle =
  | "Designer"
  | "Product Owner"
  | "Software Engineer"
  | string;

export type MemberFrontmatter = {
  active: boolean;
  bio?: string;
  image?: GatsbyImage;
  name: MemberName;
  order: number;
  title: MemberTitle;
};

export type MemberNode = {
  node: {
    frontmatter: MemberFrontmatter;
    id: string;
    slug: string;
  };
};

export interface MembersData {
  members: {
    edges: MemberNode[];
  };
}

export const useMembersQuery = () => {
  const { members }: MembersData = useStaticQuery(
    graphql`
      query MembersQuery {
        members: allMdx(
          filter: {
            slug: { regex: "/members/" }
            frontmatter: { active: { eq: true } }
          }
          sort: { order: ASC, fields: frontmatter___order }
        ) {
          edges {
            node {
              frontmatter {
                active
                bio
                image {
                  childImageSharp {
                    fluid(maxWidth: 1280, maxHeight: 1280, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                  name
                }
                name
                order
                title
              }
              id
              slug
            }
          }
        }
      }
    `
  );

  return members;
};
