import { useStaticQuery, graphql } from "gatsby";

import { SiteMetadataProps } from "types/site-metadata";

export const siteMetadataFragment = graphql`
  fragment SiteMetadataFragment on Site {
    siteMetadata {
      acronym
      address {
        locality
        region
        street
        ziocode
      }
      author {
        email
        name
        url
      }
      copyright
      defaultDescription
      defaultTitle
      hours
      lang
      memorial
      name
      organization {
        email
        name
        telephone
        url
      }
      siteUrl
      socialMedia {
        instagram
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
