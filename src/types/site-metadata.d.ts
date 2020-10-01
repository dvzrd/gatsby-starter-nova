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
        email: string;
        name: string;
        telephone: string;
        url: string;
      };
      siteUrl: string;
      socialMedia: {
        instagram: string;
        twitter: string;
      };
    };
  };
}
