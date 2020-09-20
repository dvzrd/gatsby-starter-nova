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
