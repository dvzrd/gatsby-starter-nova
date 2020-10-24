import React, { FC } from "react";
import Img from "gatsby-image";
import classNames from "classnames";
import { kebabCase } from "lodash";

import { BoxProps } from "components";
import { useLogoData, useSiteNameData } from "graphql";

export type LogoName = "black" | "dark" | "light" | "white" | string;

export interface BrandLogoProps extends BoxProps {
  logoName?: LogoName;
}

export const BrandLogo: FC<BrandLogoProps> = ({ className, logoName }) => {
  const { logo, logoBlack, logoDark, logoLight, logoWhite } = useLogoData();
  const { name } = useSiteNameData();

  switch (logoName) {
    case "black":
      return (
        <Img
          className={classNames("mr-2 w-10", className)}
          alt={kebabCase(`${name}-${logoBlack.name}`)}
          {...logoBlack.childImageSharp}
        />
      );
    case "dark":
      return (
        <Img
          className={classNames("mr-2 w-10", className)}
          alt={kebabCase(`${name}-${logoDark.name}`)}
          {...logoDark.childImageSharp}
        />
      );
    case "light":
      return (
        <Img
          className={classNames("mr-2 w-10", className)}
          alt={kebabCase(`${name}-${logoLight.name}`)}
          {...logoLight.childImageSharp}
        />
      );
    case "white":
      return (
        <Img
          className={classNames("mr-2 w-10", className)}
          alt={kebabCase(`${name}-${logoWhite.name}`)}
          {...logoWhite.childImageSharp}
        />
      );
    default:
      if (!logo?.childImageSharp) return null;

      return (
        <Img
          className={classNames("mr-2 w-10", className)}
          alt={kebabCase(`${name}-${logo.name}`)}
          {...logo.childImageSharp}
        />
      );
  }
};
