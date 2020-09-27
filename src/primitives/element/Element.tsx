import React, { ElementType, FC, HTMLAttributes } from "react";

export interface ElementProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export const Element: FC<ElementProps> = ({
  as = "div",
  children,
  ...props
}) => {
  const Component = as;

  return <Component {...props}>{children}</Component>;
};
