import React, { FC } from "react";
import { SubmitHandler } from "react-hook-form";

import { Grid, GridProps } from "components";

export interface FormProps extends GridProps {
  onSubmit?: SubmitHandler<any>;
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
