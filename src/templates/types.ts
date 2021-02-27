import { PageProps } from "gatsby";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";

import { PageHeroProps, MDXProps, SectionProps } from "components";
import { ContactProps } from "containers";
import { DefaultLayoutProps } from "layouts";
import { GatsbyImage } from "types";

export type PageFields = {
  slug: string;
};

export interface PageFrontmatter {
  contact?: ContactProps;
  description?: string;
  hero?: PageHeroProps;
  imageDark?: GatsbyImage;
  imageLight?: GatsbyImage;
  layout?: DefaultLayoutProps;
  main?: SectionProps;
  mdx?: MDXProps;
  page?: string;
  seo?: GatsbySeoProps;
  showFooter?: boolean;
  showHeader?: boolean;
  subtitle?: string;
  tags?: string[];
  template?: string;
  title?: string;
}

export interface PageContext {
  excerpt?: string;
  fields: PageFields;
  frontmatter: PageFrontmatter;
  id: string;
}

export interface DefaultPageProps extends PageProps {
  isMDX?: boolean;
  pageContext: PageContext;
}
