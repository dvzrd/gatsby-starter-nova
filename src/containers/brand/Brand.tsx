import React, { FC } from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

import {
  BrandLogo,
  BrandLogoProps,
  BrandName,
  BrandNameProps,
} from "./components";
import styles from "./Brand.module.css";

export type LogoColor = "black" | "white";

export interface BrandProps extends PatternProps {
  isShort?: boolean;
  linkTo?: string;
  logoColor?: LogoColor;
  logoProps?: BrandLogoProps;
  nameProps?: BrandNameProps;
  showLink?: boolean;
  showLogo?: boolean;
  showName?: boolean;
}

export const Brand: FC<BrandProps> = ({
  children,
  className,
  isShort = false,
  linkTo = "/",
  logoColor,
  logoProps,
  nameProps,
  showLink = true,
  showLogo = true,
  showName = true,
}) => {
  const renderBrand = () => (
    <>
      {showLogo && <BrandLogo logoColor={logoColor} {...logoProps} />}
      {showName && (
        <BrandName isShort={isShort} {...nameProps}>
          {children}
        </BrandName>
      )}
    </>
  );

  return (
    <>
      {showLink ? (
        <Link className={classNames(styles.brand, className)} to={linkTo}>
          {renderBrand()}
        </Link>
      ) : (
        <Pattern className={classNames(styles.brand, className)}>
          {renderBrand()}
        </Pattern>
      )}
    </>
  );
};
