import React, { FC } from "react";
import Img from "gatsby-image";
import classNames from "classnames";

import { BoxProps } from "components";
import { useTheme } from "contexts";

import { LogoColor } from "../../Brand";
import { useBrandData } from "../../brand.gql";

export interface BrandLogoProps extends BoxProps {
  logoColor?: LogoColor;
}

export const BrandLogo: FC<BrandLogoProps> = ({ className, logoColor }) => {
  const { theme } = useTheme();
  const {
    logo,
    logoBlack,
    logoDark,
    logoLight,
    logoWhite,
    name,
  } = useBrandData();

  if (!logo?.childImageSharp) return null;

  if (logoColor === "black") {
    return (
      <Img
        className={classNames("mr-2 w-10", className)}
        alt={name}
        {...logoBlack.childImageSharp}
      />
    );
  } else if (logoColor === "white") {
    return (
      <Img
        className={classNames("mr-2 w-10", className)}
        alt={name}
        {...logoWhite.childImageSharp}
      />
    );
  }

  if (logoDark && theme === "theme-dark") {
    return (
      <Img
        className={classNames("mr-2 w-10", className)}
        alt={name}
        {...logoDark.childImageSharp}
      />
    );
  } else if (logoLight && theme === "theme-light") {
    return (
      <Img
        className={classNames("mr-2 w-10", className)}
        alt={name}
        {...logoLight.childImageSharp}
      />
    );
  }

  return (
    <Img
      className={classNames("mr-2 w-10", className)}
      alt={name}
      {...logo.childImageSharp}
    />
  );
};
