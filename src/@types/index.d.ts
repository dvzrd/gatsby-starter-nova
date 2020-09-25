interface CSSModule {
  [className: string]: string;
}

interface GatsbyImage {
  src: string;
  base64?: string;
  srcWebp?: string;
  srcSet?: string;
  srcSetWebp?: string;
  tracedSVG?: string;
}

interface GatsbyImageFluid extends GatsbyImage {
  maxHeight: number;
  maxWidth: number;
}

interface GatsbyImageFixed extends GatsbyImage {
  height: number;
  width: number;
}

declare module "*.css" {
  const content: CSSModule;
  export = content;
}

declare module "*.scss" {
  const content: CSSModule;
  export = content;
}

declare module "*.svg" {
  const content: any;
  export = content;
}
