import { FluidObject } from "gatsby-image";

import { ElementProps } from "components";

export interface DefaultLayoutProps extends ElementProps {
  seo?: {
    description?: string;
    image?: string;
    title: string;
  };
}

export interface StaticQueryProps {
  logo?: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  site: {
    siteMetadata: {
      copyright: string;
      defaultDescription: string;
      defaultTitle: string;
      memorial: string;
      name: string;
      organization: {
        name: string;
        url: string;
      };
      siteUrl: string;
      socialMedia: {
        twitter: string;
      };
    };
  };
}
