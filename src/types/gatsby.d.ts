import { FluidObject } from "gatsby-image";

export type GatsbyDate = string | number | Date;

export type GatsbyImage = {
  childImageSharp: {
    fluid: FluidObject;
  };
  id?: string;
  name?: string;
};

export type GatsbyLocation =
  | {
      key: string;
      pathname: string;
      search: string;
      hash: string;
    }
  | WindowsLocation;
