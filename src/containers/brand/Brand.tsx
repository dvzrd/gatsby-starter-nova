import React, { FC } from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import { Element, ElementProps } from "components";

import { BrandLogo, BrandName } from "./components";

export interface BrandProps extends ElementProps {
  isShort?: boolean;
  linkTo?: string;
  logoProps?: ElementProps;
  nameProps?: ElementProps;
  showLink?: boolean;
  showLogo?: boolean;
  showName?: boolean;
}

export const Brand: FC<BrandProps> = ({
  children,
  className,
  isShort = false,
  linkTo = "/",
  logoProps,
  nameProps,
  showLink = true,
  showLogo = true,
  showName = true,
}) => {
  const renderBrand = () => (
    <>
      {showLogo && <BrandLogo {...logoProps} />}
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
        <Link
          className={classNames("content-center flex items-center", className)}
          to={linkTo}
        >
          {renderBrand()}
        </Link>
      ) : (
        <Element
          className={classNames("content-center flex items-center", className)}
        >
          {renderBrand()}
        </Element>
      )}
    </>
  );
};
