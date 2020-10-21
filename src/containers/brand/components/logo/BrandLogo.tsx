import React, { FC } from "react";
import Img from "gatsby-image";
import classNames from "classnames";
import { kebabCase } from "lodash";

import { BoxProps } from "components";
import { useTheme } from "contexts";
import { useLogoData, useSiteNameData } from "graphql";

import { LogoColor } from "../../Brand";

export interface BrandLogoProps extends BoxProps {
  logoColor?: LogoColor;
}

export const BrandLogo: FC<BrandLogoProps> = ({ className, logoColor }) => {
  const { theme } = useTheme();
  const { logo, logoBlack, logoDark, logoLight, logoWhite } = useLogoData();
  const { name } = useSiteNameData();

  if (logoColor === "black") {
    return (
      <Img
        className={classNames("mr-2 w-10", className)}
        alt={kebabCase(`${name}-${logoBlack.name}`)}
        {...logoBlack.childImageSharp}
      />
    );
  } else if (logoColor === "white") {
    return (
      <Img
        className={classNames("mr-2 w-10", className)}
        alt={kebabCase(`${name}-${logoWhite.name}`)}
        {...logoWhite.childImageSharp}
      />
    );
  }

  if (logoDark && theme === "theme-dark") {
    return (
      <Img
        className={classNames("mr-2 w-10", className)}
        alt={kebabCase(`${name}-${logoDark.name}`)}
        {...logoDark.childImageSharp}
      />
    );
  } else if (logoLight && theme === "theme-light") {
    return (
      <Img
        className={classNames("mr-2 w-10", className)}
        alt={kebabCase(`${name}-${logoLight.name}`)}
        {...logoLight.childImageSharp}
      />
    );
  }

  if (!logo?.childImageSharp) return null;

  return (
    <Img
      className={classNames("mr-2 w-10", className)}
      alt={kebabCase(`${name}-${logo.name}`)}
      {...logo.childImageSharp}
    />
  );
};
