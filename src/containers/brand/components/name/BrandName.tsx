import React, { FC } from "react";

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
      utils="font-semibold leading-none tracking-tight uppercase"
      {...rest}
    >
      {children ? children : isShort ? acronym : name}
    </Text>
  );
};
