export * from "./gatsby";
export * from "./graphql";
export * from "./observer";
export * from "./spring";

interface CSSModule {
  [className: string]: string;
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
