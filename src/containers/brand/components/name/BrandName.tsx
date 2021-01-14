import React, { FC } from "react";
import classNames from "classnames";

import { Text, TextProps } from "components";
import { useSiteMetadataQuery } from "graphql";

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
  const { acronym, name } = useSiteMetadataQuery();

  return (
    <Text
      as={as}
      className={classNames(
        "font-semibold leading-none tracking-tight uppercase",
        className
      )}
      {...(rest as TextProps)}
    >
      {children ? children : isShort ? acronym : name}
    </Text>
  );
};
