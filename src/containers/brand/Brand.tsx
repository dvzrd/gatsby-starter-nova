import React, { FC } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

import { Element, ElementProps } from "components";

import { useBrandData } from "./brand.gql";

export const Brand: FC<ElementProps> = ({ className }) => {
  const { logo, name } = useBrandData();

  return (
    <Element className={className}>
      <Link className="content-center flex items-center" to="/">
        {logo?.childImageSharp && (
          <Img
            className="-mt-2 -ml-4 w-10"
            alt={name}
            {...logo.childImageSharp}
          />
        )}
        <h1 className="font-semibold inline-flex leading-none text-xl text-purple-500 tracking-tight uppercase">
          {name}
        </h1>
      </Link>
    </Element>
  );
};
