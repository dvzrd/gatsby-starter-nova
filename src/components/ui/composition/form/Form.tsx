import React, { FC } from "react";

import { Grid, GridProps } from "components";

export interface FormProps extends GridProps {
  onSubmit: (data: object) => void;
}

export const Form: FC<FormProps> = ({
  as = "form",
  children,
  onSubmit,
  ...rest
}) => (
  <Grid as={as} {...(rest as GridProps)} onSubmit={onSubmit}>
    {children}
  </Grid>
);
