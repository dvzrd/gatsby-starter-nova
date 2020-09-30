import { useStaticQuery, graphql } from "gatsby";

import { SiteMetadataProps } from "./types";

// TODO: move thise to a global module so it can be used in other places

export const siteMetadataFragment = graphql`
  fragment SiteMetadataFragment on Site {
    siteMetadata {
      copyright
      defaultDescription
      defaultTitle
      memorial
      name
      organization {
        name
        url
      }
      siteUrl
      socialMedia {
        twitter
      }
    }
  }
`;

export const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  }: SiteMetadataProps = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        site {
          ...SiteMetadataFragment
        }
      }
    `
  );

  return siteMetadata;
};
