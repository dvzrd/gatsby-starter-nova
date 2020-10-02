import { useStaticQuery, graphql } from "gatsby";

import { SiteMetadata } from "types/graphql";

export const siteMetadataFragment = graphql`
  fragment SiteMetadataFragment on Site {
    siteMetadata {
      acronym
      address {
        locality
        region
        street
        zipcode
      }
      author {
        email
        name
        url
      }
      copyright {
        authorMessage
        message
        year
      }
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
  }: SiteMetadata = useStaticQuery(
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
