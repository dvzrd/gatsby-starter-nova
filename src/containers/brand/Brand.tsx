import React, { FC } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

import { Element, ElementProps } from "components";

import styles from "./Brand.module.css";
import { useBrandData } from "./brand.gql";

export const Brand: FC<ElementProps> = ({ className }) => {
  const { logo, name } = useBrandData();

  return (
    <Element className={className}>
      <Link className="content-center flex items-center" to="/">
        {logo?.childImageSharp && (
          <Img className={styles.logo} alt={name} {...logo.childImageSharp} />
        )}
        <h1 className={styles.name}>{name}</h1>
      </Link>
    </Element>
  );
};
