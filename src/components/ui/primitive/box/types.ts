// Box Types

export type BoxColor = string;

export type BoxDimension = number | string;

export type BoxDisplay =
  | "block"
  | "inline-block"
  | "inline"
  | "flex"
  | "inline-flex"
  | string;

export type BoxInset =
  | "0"
  | "1/4"
  | "1/3"
  | "1/2"
  | "2/3"
  | "3/4"
  | "auto"
  | "full"
  | "x-0"
  | "x-1/4"
  | "x-1/3"
  | "x-1/2"
  | "x-2/3"
  | "x-3/4"
  | "x-auto"
  | "y-0"
  | "y-1/4"
  | "y-1/3"
  | "y-1/2"
  | "y-2/3"
  | "y-3/4"
  | "y-auto";

export type BoxPosition =
  | "absolute"
  | "fixed"
  | "relative"
  | "static"
  | "sticky";

export type BoxSizing = "border" | "content";

// Box Alignment Types

export type AlignContent =
  | "around"
  | "between"
  | "center"
  | "end"
  | "evenly"
  | "start";

export type AlignItems = "baseline" | "center" | "end" | "start" | "stretch";

export type AlignSelf = "auto" | "center" | "end" | "start" | "stretch";

export type PlaceContent = AlignContent | "stretch";

// Flex Box Types

export type FlexDirection = "col" | "col-reverse" | "row" | "row-reverse";

export type FlexFlow =
  | "col-nowrap"
  | "col-reverse-nowrap"
  | "col-wrap"
  | "col-reverse-wrap"
  | "col-wrap-reverse"
  | "col-reverse-wrap-reverse"
  | "row-nowrap"
  | "row-reverse-nowrap"
  | "row-wrap"
  | "row-reverse-wrap"
  | "row-wrap-reverse"
  | "row-reverse-wrap-reverse";

export type FlexGrow = "default" | "0";

export type FlexShrink = "default" | "0";

export type FlexType = "1" | "auto" | "initial" | "none";

export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
