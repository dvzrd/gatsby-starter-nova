import { PageProps } from "gatsby";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";

import { HeroProps, MDXProps, SectionProps } from "components";
import { DefaultLayoutProps } from "layouts";
import { PageFields } from "templates";
import { GatsbyImage } from "types/gatsby";

export type ProjectFrontmatter = {
  category?: string;
  date: string | number | Date;
  description?: string;
  hero?: HeroProps;
  image?: GatsbyImage;
  layout?: DefaultLayoutProps;
  main?: SectionProps;
  mdx?: MDXProps;
  page?: string;
  seo?: GatsbySeoProps;
  showFooter?: boolean;
  showHeader?: boolean;
  showRecommended?: boolean;
  subtitle?: string;
  tags?: string[];
  title: string;
};

export interface ProjectData {
  body?: string;
  excerpt?: string;
  frontmatter: ProjectFrontmatter;
  slug?: string;
}

export type ProjectContextFrontmatter = {
  category?: string;
  date?: string;
  image?: GatsbyImage;
  title: string;
};

export type ProjectContextData = {
  excerpt?: string;
  fields: PageFields;
  frontmatter: ProjectContextFrontmatter;
};

export interface ProjectTemplateProps extends PageProps {
  data: {
    project: ProjectData;
  };
  pageContext: {
    nextPage?: ProjectContextData;
    prevPage?: ProjectContextData;
  };
}
