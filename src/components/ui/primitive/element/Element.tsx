import React, { ElementType, FC, HTMLProps, MutableRefObject } from "react";

export type ElementRef =
  | ((instance: Element | null) => void)
  | MutableRefObject<Element | null>
  | null;

export interface ElementProps<Element extends HTMLElement = HTMLDivElement>
  extends Omit<HTMLProps<Element>, "as" | "content" | "list"> {
  as?: ElementType;
  innerRef?: ElementRef;
  testId?: string;
}

export const Element: FC<ElementProps> = <
  E extends HTMLElement = HTMLDivElement
>({
  as = "div",
  children,
  className,
  innerRef,
  testId,
  ...rest
}: ElementProps<E>) => {
  const Component = as;

  return (
    <Component
      {...rest}
      className={className}
      ref={innerRef}
      data-test-id={testId}
    >
      {children}
    </Component>
  );
};
