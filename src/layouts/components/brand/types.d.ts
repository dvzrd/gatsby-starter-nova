import { FluidObject } from "gatsby-image";

export interface BrandDataProps {
  logo: {
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
