import { PageProps } from "gatsby";

import { BoxProps, HeroProps, MDXProps } from "components";
import { PanelLayoutProps } from "layouts";

import { PageContext, PageFrontmatter } from "../types";

export interface PanelFrontmatter
  extends Omit<PageFrontmatter, "contact" | "hero" | "layout" | "main"> {
  hero?: HeroProps;
  layout?: PanelLayoutProps;
  main?: BoxProps | MDXProps;
}

export interface PanelContext extends Omit<PageContext, "frontmatter"> {
  frontmatter: PanelFrontmatter;
}

export interface PanelTemplateProps extends PageProps {
  isMDX?: boolean;
  pageContext: PanelContext;
}
