import React, { FC } from "react";
import classNames from "classnames";

import { Text, TextProps } from "components";

import { useBrandData } from "../../brand.gql";

export interface BrandNameProps extends TextProps {
  isShort?: boolean;
}

export const BrandName: FC<BrandNameProps> = ({
  as = "h1",
  children,
  className,
  isShort,
  ...rest
}) => {
  const { acronym, name } = useBrandData();

  return (
    <Text
      as={as}
      {...rest}
      className={classNames(
        "font-semibold inline-flex leading-none tracking-tight uppercase",
        className
      )}
    >
      {children ? children : isShort ? acronym : name}
    </Text>
  );
};
