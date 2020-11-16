import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { Grid, GridProps } from "components";

export interface FormProps extends GridProps {
  onSubmit: (data: object) => void;
}

export const Form: FC<FormProps> = ({
  as = "form",
  children,
  onSubmit,
  ...rest
}) => {
  const { errors, formState, handleSubmit } = useForm();

  console.log(errors, formState);

  return (
    <Grid as={as} {...(rest as GridProps)} onSubmit={handleSubmit(onSubmit)}>
      {children}
    </Grid>
  );
};
