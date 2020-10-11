import { FluidObject } from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export interface BrandDataProps {
  logo: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  logoBlack: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  logoDark: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  logoLight: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  logoWhite: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  site: {
    siteMetadata: {
      acronym?: string;
      name: string;
    };
  };
}

export const brandLogoFragment = graphql`
  fragment BrandLogoFragment on File {
    childImageSharp {
      fluid(maxHeight: 800, maxWidth: 800, quality: 90) {
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
    logoBlack,
    logoDark,
    logoLight,
    logoWhite,
    site: {
      siteMetadata: { acronym, name },
    },
  }: BrandDataProps = useStaticQuery(
    graphql`
      query BrandQuery {
        logo: file(relativePath: { eq: "logo.png" }) {
          ...BrandLogoFragment
        }
        logoBlack: file(relativePath: { eq: "logo-black.png" }) {
          ...BrandLogoFragment
        }
        logoDark: file(relativePath: { eq: "logo-dark.png" }) {
          ...BrandLogoFragment
        }
        logoLight: file(relativePath: { eq: "logo-light.png" }) {
          ...BrandLogoFragment
        }
        logoWhite: file(relativePath: { eq: "logo-white.png" }) {
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
    logoBlack,
    logoDark,
    logoLight,
    logoWhite,
    name,
  };
};
