import { PageProps } from "gatsby";

import { PostHeroProps } from "components";
import { GatsbyDate, GatsbyImage } from "types";

import { PageContext, PageFrontmatter } from "../types";

export interface PostFrontmatter extends Omit<PageFrontmatter, "hero"> {
  category?: string;
  date: GatsbyDate;
  hero?: PostHeroProps;
  image?: GatsbyImage;
  showRecommended?: boolean;
  subtitle?: string;
  tags?: string[];
  updated?: GatsbyDate;
}

export interface PostData extends Omit<PageContext, "frontmatter"> {
  body?: string;
  frontmatter: PostFrontmatter;
}

export interface PostContextFrontmatter {
  category?: string;
  date?: GatsbyDate;
  description?: string;
  image?: GatsbyImage;
  title: string;
  subtitle?: string;
  updated?: GatsbyDate;
}

export interface PostContext extends Omit<PageContext, "frontmatter"> {
  frontmatter: PostContextFrontmatter;
}

export interface PostTemplateProps extends PageProps {
  data: {
    post: PostData;
  };
  pageContext: {
    nextPage?: PostContext;
    prevPage?: PostContext;
  };
}
