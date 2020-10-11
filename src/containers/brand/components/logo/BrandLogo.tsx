import React, { FC } from "react";
import Img from "gatsby-image";
import classNames from "classnames";

import { ElementProps } from "components";

import { useBrandData } from "../../brand.gql";

export const BrandLogo: FC<ElementProps> = ({ className }) => {
  const { logo, name } = useBrandData();

  if (!logo?.childImageSharp) return null;

  return (
    <Img
      className={classNames("mr-2 w-10", className)}
      alt={name}
      {...logo.childImageSharp}
    />
  );
};
