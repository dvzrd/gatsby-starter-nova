import { ProjectHeroProps } from "components";
import { PageProps } from "gatsby";

import { GatsbyImage } from "types";

import {
  PostContext,
  PostContextFrontmatter,
  PostData,
  PostFrontmatter,
} from "../post";

export interface ProjectDeviceMedia {
  phone: GatsbyImage;
  phoneLandscape?: GatsbyImage;
  tablet?: GatsbyImage;
  tabletLandscape?: GatsbyImage;
  laptop: GatsbyImage;
  desktop?: GatsbyImage;
}

export interface ProjectFrontmatter extends Omit<PostFrontmatter, "hero"> {
  client?: string;
  deviceMedia?: ProjectDeviceMedia;
  hero?: ProjectHeroProps;
  url?: string;
}

export interface ProjectData extends Omit<PostData, "frontmatter"> {
  frontmatter: ProjectFrontmatter;
}

export interface ProjectContextFrontmatter extends PostContextFrontmatter {
  client?: string;
  description?: string;
  hero?: ProjectHeroProps;
  subtitle?: string;
  url?: string;
}

export interface ProjectContext extends Omit<PostContext, "frontmatter"> {
  frontmatter: ProjectContextFrontmatter;
}

export interface ProjectTemplateProps extends PageProps {
  data: {
    project: ProjectData;
  };
  pageContext: {
    nextPage?: ProjectContext;
    prevPage?: ProjectContext;
  };
}
