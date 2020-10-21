import { FluidObject } from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export interface LogoImage {
  childImageSharp: {
    fluid: FluidObject;
  };
  name: string;
}

export interface LogoData {
  logo: LogoImage;
  logoBlack: LogoImage;
  logoDark: LogoImage;
  logoLight: LogoImage;
  logoWhite: LogoImage;
}

export const logoImageFragment = graphql`
  fragment LogoImageFragment on File {
    childImageSharp {
      fluid(maxHeight: 800, maxWidth: 800, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    name
  }
`;

export const useLogoData = () => {
  const {
    logo,
    logoBlack,
    logoDark,
    logoLight,
    logoWhite,
  }: LogoData = useStaticQuery(
    graphql`
      query LogoQuery {
        logo: file(relativePath: { eq: "logo.png" }) {
          ...LogoImageFragment
        }
        logoBlack: file(relativePath: { eq: "logo-black.png" }) {
          ...LogoImageFragment
        }
        logoDark: file(relativePath: { eq: "logo-dark.png" }) {
          ...LogoImageFragment
        }
        logoLight: file(relativePath: { eq: "logo-light.png" }) {
          ...LogoImageFragment
        }
        logoWhite: file(relativePath: { eq: "logo-white.png" }) {
          ...LogoImageFragment
        }
      }
    `
  );

  return {
    logo,
    logoBlack,
    logoDark,
    logoLight,
    logoWhite,
  };
};
