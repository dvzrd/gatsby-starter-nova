export interface SiteMetadataAddress {
  locality: string;
  region: string;
  street: string;
  zipcode: string;
}

export interface SiteMetadataAuthor {
  email: string;
  name: string;
  url: string;
}

export interface SiteMetadataCopyright {
  authorMessage?: string;
  message?: string;
  year?: number;
}

export interface SiteMetadataOrganization {
  email: string;
  name: string;
  telephone: string;
  url: string;
}

export interface SiteMetadataSocialMedia {
  instagram?: string;
  twitter?: string;
}

export interface SiteMetadata {
  site: {
    siteMetadata: {
      acronym?: string;
      address?: SiteMetadataAddress;
      author?: SiteMetadataAuthor;
      copyright?: SiteMetadataCopyright;
      description: string;
      footnote?: string;
      hours?: string[];
      lang?: string;
      memorial?: string;
      name: string;
      organization?: SiteMetadataOrganization;
      siteUrl: string;
      socialMedia?: SiteMetadataSocialMedia;
      subscribeURL?: string;
      title: string;
    };
  };
}
