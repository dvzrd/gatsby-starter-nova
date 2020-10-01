import React, { FC } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

import { Element } from "components";

import styles from "./Brand.module.css";
import { useBrandData } from "./brand.gql";
import { BrandProps } from "./types";

// TODO:
// - use props to render different brand variations
//   - brand name only, logo only, short logo using acronym, no link, etc...

export const Brand: FC<BrandProps> = ({ className, linkTo = "/" }) => {
  const { logo, name } = useBrandData();

  return (
    <Element className={className}>
      <Link className={styles.link} to={linkTo}>
        {logo?.childImageSharp && (
          <Img className={styles.logo} alt={name} {...logo.childImageSharp} />
        )}
        <h1 className={styles.name}>{name}</h1>
      </Link>
    </Element>
  );
};
