import React, { FC } from "react";
import { Link } from "gatsby";
import clsx from "clsx";

import { Pattern, PatternProps } from "components";
import { useTheme } from "contexts";

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
  logoDark?: string;
  logoLight?: string;
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
  logoDark = "dark",
  logoLight = "light",
  logoProps,
  nameProps,
  showLink = true,
  showLogo = true,
  showName = true,
}) => {
  const { theme } = useTheme();

  const getLogoName = () =>
    logoName
      ? logoName
      : theme
      ? theme === "dark"
        ? logoDark
        : logoLight
      : undefined;

  const renderBrand = () => (
    <>
      {showLogo && <BrandLogo logoName={getLogoName()} {...logoProps} />}
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
        <Link className={clsx(styles.brand, className)} to={linkTo}>
          {renderBrand()}
        </Link>
      ) : (
        <Pattern className={clsx(styles.brand, className)}>
          {renderBrand()}
        </Pattern>
      )}
    </>
  );
};
