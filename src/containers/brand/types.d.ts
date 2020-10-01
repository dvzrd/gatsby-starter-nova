import { FluidObject } from "gatsby-image";

import { ElementProps } from "components";

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

export interface BrandProps extends ElementProps {
  linkTo?: string;
}
