import { PageProps } from "gatsby";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";

import { HeroProps, MDXProps, SectionProps } from "components";
import { DefaultLayoutProps } from "layouts";
import { MemberName } from "graphql";
import { GatsbyImage } from "types/gatsby";

export type PostFrontmatter = {
  author?: MemberName;
  category?: string;
  date: string | number | Date;
  description: string;
  hero?: HeroProps;
  image?: GatsbyImage;
  layout?: DefaultLayoutProps;
  main?: SectionProps;
  mdx?: MDXProps;
  page?: string;
  seo?: GatsbySeoProps;
  showAuthor?: boolean;
  showFooter?: boolean;
  showHeader?: boolean;
  showRecommended?: boolean;
  subtitle: string;
  tags?: string[];
  title: string;
};

export interface PostData {
  body?: string;
  excerpt?: string;
  frontmatter: PostFrontmatter;
  slug?: string;
}

export type PageContextFrontmatter = {
  category?: string;
  date?: string;
  image?: GatsbyImage;
  title: string;
};

export type PageContextData = {
  excerpt?: string;
  frontmatter: PageContextFrontmatter;
  slug?: string;
};

export interface PostTemplateProps extends PageProps {
  data: {
    post: PostData;
  };
  pageContext: {
    nextPage?: PageContextData;
    prevPage?: PageContextData;
  };
}
