import React, { FC } from "react";
import classNames from "classnames";

import { Element, ElementProps } from "components";

import { useBrandData } from "../../brand.gql";

export interface BrandNameProps extends ElementProps {
  isShort?: boolean;
}

export const BrandName: FC<BrandNameProps> = ({
  as = "h1",
  children,
  className = "text-xl",
  isShort,
}) => {
  const { acronym, name } = useBrandData();

  return (
    <Element
      as={as}
      className={classNames(
        "font-semibold inline-flex leading-none tracking-tight uppercase",
        className
      )}
    >
      {children ? children : isShort ? acronym : name}
    </Element>
  );
};