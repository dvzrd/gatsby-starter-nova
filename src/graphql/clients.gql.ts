import { useStaticQuery, graphql } from "gatsby";

import { GatsbyDate } from "types";

export type ClientFrontmatter = {
  category: string;
  client: string;
  date?: GatsbyDate;
  featured?: boolean;
  // logo: GatsbyImage;
  updated?: GatsbyDate;
  url: string;
};

export type ClientNode = {
  frontmatter: ClientFrontmatter;
  id: string;
};

export interface ClientsData {
  clients: {
    nodes: ClientNode[];
  };
}

export const useClientsQuery = () => {
  const { clients }: ClientsData = useStaticQuery(
    graphql`
      query ClientsQuery {
        clients: allMdx(
          filter: {
            frontmatter: { template: { eq: "project" } }
            slug: { regex: "/projects/" }
          }
          limit: 6
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          nodes {
            frontmatter {
              category
              client
              date(formatString: "MMMM DD, YYYY")
              # logo {
              #   childImageSharp {
              #     fluid(maxWidth: 1280, maxHeight: 1280, quality: 90) {
              #       ...GatsbyImageSharpFluid_withWebp
              #     }
              #   }
              #   name
              # }
              updated(formatString: "MMMM DD, YYYY")
              url
            }
            id
          }
        }
      }
    `
  );

  return clients;
};
