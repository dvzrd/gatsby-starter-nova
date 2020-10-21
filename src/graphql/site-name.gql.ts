import { useStaticQuery, graphql } from "gatsby";

export interface SiteNameData {
  site: {
    siteMetadata: {
      acronym?: string;
      name: string;
    };
  };
}

export const siteNameFragment = graphql`
  fragment SiteNameFragment on Site {
    siteMetadata {
      acronym
      name
    }
  }
`;

export const useSiteNameData = () => {
  const {
    site: {
      siteMetadata: { acronym, name },
    },
  }: SiteNameData = useStaticQuery(
    graphql`
      query SiteNameQuery {
        site {
          ...SiteNameFragment
        }
      }
    `
  );

  return {
    acronym,
    name,
  };
};
