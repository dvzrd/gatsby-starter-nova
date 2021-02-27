import React, { FC } from "react";
import clsx from "clsx";

import { Text, TextProps } from "components";
import { useSiteMetadataQuery } from "graphql";

export interface BrandNameProps extends TextProps {
  isShort?: boolean;
}

export const BrandName: FC<BrandNameProps> = ({
  children,
  className,
  isShort,
  ...rest
}) => {
  const { acronym, name } = useSiteMetadataQuery();

  return (
    <Text
      className={clsx(
        "font-semibold leading-none tracking-tight uppercase",
        className
      )}
      {...(rest as TextProps)}
    >
      {children ? children : isShort ? acronym : name}
    </Text>
  );
};
