import { graphql } from "gatsby";

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
