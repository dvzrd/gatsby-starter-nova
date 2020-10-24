import React, { FC } from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

import {
  BrandLogo,
  BrandLogoProps,
  BrandName,
  BrandNameProps,
  LogoName,
} from "./components";
import styles from "./Brand.module.css";

export interface BrandProps extends PatternProps {
  isShort?: boolean;
  linkTo?: string;
  logoName?: LogoName;
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
  logoName,
  logoProps,
  nameProps,
  showLink = true,
  showLogo = true,
  showName = true,
}) => {
  const renderBrand = () => (
    <>
      {showLogo && <BrandLogo logoName={logoName} {...logoProps} />}
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
