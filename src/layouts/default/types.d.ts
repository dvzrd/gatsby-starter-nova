import { ElementProps } from "components";

export interface DefaultLayoutProps extends ElementProps {
  seo?: {
    description?: string;
    image?: string;
    title: string;
  };
}

export interface SiteMetadataProps {
  site: {
    siteMetadata: {
      acronym: string;
      address: {
        locality: string;
        region: string;
        street: string;
        zipcode: string;
      };
      author: {
        email: string;
        name: string;
        url: string;
      };
      copyright: string;
      defaultDescription: string;
      defaultTitle: string;
      hours: string[];
      lang: string;
      memorial: string;
      name: string;
      organization: {
        name: string;
        url: string;
        telephone: string;
        url: string;
      };
      siteUrl: string;
      socialMedia: {
        twitter: string;
      };
    };
  };
}
