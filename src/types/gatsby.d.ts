import { GatsbyImageProps } from "gatsby-image";

export type GatsbyImage = {
  childImageSharp: GatsbyImageProps;
  name: string;
};

export type GatsbyLocation = {
  key: string;
  pathname: string;
  search: string;
  hash: string;
};
