import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { Pattern, PatternProps } from "components";

export interface FormProps extends PatternProps {
  onSubmit: (data: object) => void;
}

export const Form: FC<FormProps> = ({
  as = "form",
  is = "form",
  children,
  onSubmit,
  ...rest
}) => {
  const { handleSubmit } = useForm();

  return (
    <Pattern
      as={as}
      is={is}
      {...(rest as PatternProps)}
      onSubmit={handleSubmit(onSubmit)}
    >
      {children}
    </Pattern>
  );
};
