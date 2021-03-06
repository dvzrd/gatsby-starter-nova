import { PageProps } from "gatsby";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";

import { PageHeroProps, MDXProps, SectionProps } from "components";
import { ContactSectionProps } from "containers";
import { DefaultLayoutProps } from "layouts";

export type PageFields = {
  slug: string;
};

export type PageFrontmatter = {
  contact?: ContactSectionProps;
  description?: string;
  hero?: PageHeroProps;
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
};

export interface PageContext {
  excerpt?: string;
  fields?: PageFields;
  frontmatter: PageFrontmatter;
  id: string;
}

export interface DefaultPageProps extends PageProps {
  pageContext: PageContext;
}
