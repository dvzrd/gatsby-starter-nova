import React, { ElementType, FC, HTMLAttributes } from "react";

export interface ElementProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export const Element: FC<ElementProps> = ({
  as = "div",
  children,
  ...rest
}) => {
  const Component = as;

  return <Component {...rest}>{children}</Component>;
};
