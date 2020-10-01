import { useStaticQuery, graphql } from "gatsby";

import { BrandDataProps } from "./types";

export const brandLogoFragment = graphql`
  fragment BrandLogoFragment on File {
    childImageSharp {
      fluid(maxHeight: 200, maxWidth: 200, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const brandNameFragment = graphql`
  fragment BrandNameFragment on Site {
    siteMetadata {
      acronym
      name
    }
  }
`;

export const useBrandData = () => {
  const {
    logo,
    site: {
      siteMetadata: { acronym, name },
    },
  }: BrandDataProps = useStaticQuery(
    graphql`
      query BrandQuery {
        logo: file(relativePath: { eq: "logo.png" }) {
          ...BrandLogoFragment
        }
        site {
          ...BrandNameFragment
        }
      }
    `
  );

  return {
    acronym,
    logo,
    name,
  };
};
