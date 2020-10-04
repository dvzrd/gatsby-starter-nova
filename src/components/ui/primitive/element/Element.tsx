import React, {
  ElementType,
  FC,
  HTMLProps,
  MutableRefObject,
  forwardRef,
} from "react";

export interface ElementProps<Element extends HTMLElement = HTMLDivElement>
  extends Omit<HTMLProps<Element>, "as" | "content" | "list"> {
  as?: ElementType;
  innerRef?:
    | ((instance: Element | null) => void)
    | MutableRefObject<Element | null>
    | null;
}

export const BaseElement: FC<ElementProps> = <
  E extends HTMLElement = HTMLDivElement
>({
  as = "div",
  children,
  className,
  innerRef,
  ...rest
}: ElementProps<E>) => {
  const Component = as;

  return (
    <Component {...rest} className={className} ref={innerRef}>
      {children}
    </Component>
  );
};

export const Element = forwardRef<HTMLDivElement, ElementProps<HTMLDivElement>>(
  (props, ref) => <BaseElement {...props} innerRef={ref} />
);
